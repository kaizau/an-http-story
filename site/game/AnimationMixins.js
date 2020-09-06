import { playSound } from "./sounds";
import { delay } from "./utils";
const {
  Animation,
  QuadraticEase,
  EasingFunction,
  TransformNode,
  Ray,
  Vector3,
  Space,
} = BABYLON;

const easeOutQuad = new QuadraticEase();
easeOutQuad.setEasingMode(EasingFunction.EASINGMODE_EASEOUT);

export class AnimationMixins {
  constructor(scene) {
    this.scene = scene;
  }

  enterScene(mesh, yTarget, onEnd) {
    Animation.CreateAndStartAnimation(
      "enter",
      mesh,
      "position.y",
      30,
      30,
      yTarget + 10,
      yTarget,
      Animation.ANIMATIONLOOPMODE_CONSTANT,
      easeOutQuad,
      onEnd
    );
  }

  exitScene(mesh, onEnd) {
    this.scene.stopAnimation(mesh);
    if (mesh.isMainCharacter) {
      playSound("teleport");
    }
    Animation.CreateAndStartAnimation(
      "exit",
      mesh,
      "position.y",
      30,
      30,
      mesh.position.y,
      mesh.position.y + 10,
      Animation.ANIMATIONLOOPMODE_CONSTANT,
      easeOutQuad,
      onEnd
    );
  }

  swallowedByEye(eye, zyra, onEnd) {
    this.scene.stopAnimation(eye);
    const initial = eye.scaling.clone();
    const target = new Vector3(2.5, 2.5, 2.5);
    Animation.CreateAndStartAnimation(
      "swallow",
      eye,
      "scaling",
      30,
      10,
      initial,
      target,
      Animation.ANIMATIONLOOPMODE_CONSTANT,
      easeOutQuad,
      async () => {
        this.scene.stopAnimation(zyra);
        zyra.dispose();
        await delay(500);
        Animation.CreateAndStartAnimation(
          "poof",
          eye,
          "scaling",
          30,
          10,
          target,
          Vector3.Zero(),
          Animation.ANIMATIONLOOPMODE_CONSTANT,
          easeOutQuad,
          onEnd
        );
      }
    );
  }

  floatTo(mesh, target) {
    Animation.CreateAndStartAnimation(
      "float",
      mesh,
      "position",
      30,
      10,
      mesh.position.clone(),
      target,
      Animation.ANIMATIONLOOPMODE_CONSTANT,
      easeOutQuad
    );
  }

  walkTo(mesh, target) {
    const current = mesh.position.clone();

    const points = [];
    points.push(current.clone());

    // Basic pathfinding
    // TODO Handle slightly indirect paths?
    let i = 0;
    while (i < 10 && (current.x !== target.x || current.z !== target.z)) {
      i++;
      let xDiff = target.x - current.x;
      xDiff = xDiff > 0 ? Math.min(xDiff, 1) : Math.max(xDiff, -1);
      if (Math.abs(xDiff) > 0 && this._canWalkTo(current, { x: xDiff })) {
        current.x += xDiff;
        const point = current.clone();
        point._walkAxis = "x";
        points.push(point);
        continue;
      }

      let zDiff = target.z - current.z;
      zDiff = zDiff > 0 ? Math.min(zDiff, 1) : Math.max(zDiff, -1);
      if (Math.abs(zDiff) > 0 && this._canWalkTo(current, { z: zDiff })) {
        current.z += zDiff;
        const point = current.clone();
        point._walkAxis = "z";
        points.push(point);
      }
    }

    if (points.length > 1) {
      const walkLength = 15;
      const walkKeys = points
        .map((point, index) => {
          return {
            frame: index * walkLength,
            value: point,
          };
        })
        // Discard keys with no direction change for smoother animation
        .filter((key, index, keys) => {
          const next = keys[index + 1];
          return !next || key.value._walkAxis !== next.value._walkAxis;
        });

      const rotationKeys = this._calcRotationKeys(walkKeys, mesh);

      const walkAnimation = new Animation(
        "walk",
        "position",
        30,
        Animation.ANIMATIONTYPE_VECTOR3,
        Animation.ANIMATIONLOOPMODE_CONSTANT
      );
      walkAnimation.setKeys(walkKeys);
      walkAnimation.setEasingFunction(easeOutQuad);
      mesh.animations.push(walkAnimation);

      const rotationAnimation = new Animation(
        "walkRotation",
        "rotation",
        30,
        Animation.ANIMATIONTYPE_VECTOR3,
        Animation.ANIMATIONLOOPMODE_CONSTANT
      );
      rotationAnimation.setKeys(rotationKeys);
      rotationAnimation.setEasingFunction(easeOutQuad);
      mesh.animations.push(rotationAnimation);

      this.scene.beginAnimation(
        mesh,
        0,
        walkKeys[walkKeys.length - 1].frame,
        false,
        1,
        () => {
          const walkIndex = mesh.animations.indexOf(walkAnimation);
          mesh.animations.splice(walkIndex, 1);
          const rotationIndex = mesh.animations.indexOf(rotationAnimation);
          mesh.animations.splice(rotationIndex, 1);
        }
      );
    }
  }

  patrolPath(mesh, path) {
    const speed = 20;
    const points = Object.values(path);
    points.push(mesh.position.clone());
    const keys = [];
    let previous = {
      frame: 0,
      value: mesh.position.clone(),
    };
    keys.push(previous);
    points.forEach((value) => {
      const distance = Math.round(previous.value.subtract(value).length());
      const current = {
        frame: previous.frame + speed * distance,
        value,
      };
      previous = current;
      keys.push(current);
    });

    const rotationKeys = this._calcRotationKeys(keys, mesh);

    const animation = new Animation(
      "patrol",
      "position",
      30,
      Animation.ANIMATIONTYPE_VECTOR3,
      Animation.ANIMATIONLOOPMODE_CYCLE
    );
    animation.setKeys(keys);
    mesh.animations.push(animation);

    const rotationAnimation = new Animation(
      "patrolRotation",
      "rotation",
      30,
      Animation.ANIMATIONTYPE_VECTOR3,
      Animation.ANIMATIONLOOPMODE_CYCLE
    );
    rotationAnimation.setKeys(rotationKeys);
    mesh.animations.push(rotationAnimation);

    this.scene.beginAnimation(mesh, 0, keys[keys.length - 1].frame, true);
  }

  // Determine rotations from keyframe positions
  _calcRotationKeys(keys, mesh) {
    // Start oriented in the initial direction to ensure smooth loop
    // Note, our meshes point "backwards", so the 2nd param is required
    if (mesh.isPatrolling) {
      mesh.lookAt(keys[1].value, Math.PI, 0, 0, Space.WORLD);
    }

    const rotationKeys = [];
    rotationKeys.push({
      frame: 0,
      value: mesh.rotation.clone(),
    });

    const node = new TransformNode();
    node.rotation = mesh.rotation.clone();

    let previous;
    keys.forEach((current) => {
      if (previous) {
        const previousY = node.rotation.y;
        node.position = previous.value;
        node.rotation.y = 0; // Reset rotation, otherwise can accumulate
        node.lookAt(current.value, Math.PI, 0, 0, Space.WORLD);

        // Translate long turns into short ones
        const diffY = node.rotation.y - previousY;
        if (diffY > Math.PI) {
          node.rotation.y -= Math.PI * 2;
        } else if (diffY < 0 - Math.PI) {
          node.rotation.y += Math.PI * 2;
        }

        rotationKeys.push({
          frame: current.frame,
          value: node.rotation.clone(),
        });
      }
      previous = current;
    });

    // If waypoints are far away, add addition keys for faster rotation
    previous = null;
    rotationKeys.slice().forEach((next, index) => {
      if (previous && next.frame - previous.frame > 20) {
        rotationKeys.splice(index, 0, {
          frame: previous.frame + 20,
          value: next.value.clone(),
        });
      }
      previous = next;
    });
    rotationKeys.sort((a, b) => a.frame - b.frame);

    node.dispose();

    return rotationKeys;
  }

  _canWalkTo(current, { x = 0, z = 0 }) {
    const origin = current.clone();
    const destination = current.clone();
    const direction = Vector3.Zero();
    direction.x += x;
    destination.x += x;
    direction.z += z;
    destination.z += z;
    const front = new Ray(origin, direction, 1);
    const down = new Ray(destination, Vector3.Down(), 1);
    const frontPick = this.scene.pickWithRay(
      front,
      (mesh) => !mesh.isMainCharacter && !mesh.isEnemy
    );
    const downPick = this.scene.pickWithRay(down, (mesh) => mesh.isWalkable);
    return !frontPick.hit && downPick.hit;
  }
}
