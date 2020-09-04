import { delay } from "./utils";
const {
  Animation,
  QuadraticEase,
  EasingFunction,
  TransformNode,
  Ray,
  Vector3,
  WORLD,
} = window.BABYLON;

const easeOutQuad = new QuadraticEase();
easeOutQuad.setEasingMode(EasingFunction.EASINGMODE_EASEOUT);

export class AnimationMixins {
  constructor(scene) {
    this.scene = scene;
  }

  enterScene(mesh, targetY, onEnd) {
    Animation.CreateAndStartAnimation(
      "enter",
      mesh,
      "position.y",
      30,
      30,
      10,
      targetY,
      Animation.ANIMATIONLOOPMODE_CONSTANT,
      easeOutQuad,
      onEnd
    );
  }

  exitScene(mesh, onEnd) {
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
          new Vector3(0, 0, 0),
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
    const point = current.clone();
    point._rotation = mesh.rotation.clone();
    points.push(point);

    // Basic pathfinding
    let i = 0;
    while (i < 10 && (current.x !== target.x || current.z !== target.z)) {
      i++;
      let xDiff = target.x - current.x;
      xDiff = xDiff > 0 ? Math.min(xDiff, 1) : Math.max(xDiff, -1);
      if (Math.abs(xDiff) > 0 && this._canWalkTo(current, { x: xDiff })) {
        current.x += xDiff;
        const point = current.clone();
        point._movementAxis = "x";
        point._movementSign = Math.sign(xDiff);
        points.push(point);
        continue;
      }

      let zDiff = target.z - current.z;
      zDiff = zDiff > 0 ? Math.min(zDiff, 1) : Math.max(zDiff, -1);
      if (Math.abs(zDiff) > 0 && this._canWalkTo(current, { z: zDiff })) {
        current.z += zDiff;
        const point = current.clone();
        point._movementAxis = "z";
        point._movementSign = Math.sign(zDiff);
        points.push(point);
      }

      // TODO Handle slightly indirect paths?
    }

    if (points.length > 1) {
      const movementLength = 15;
      const movementKeys = points
        .map((point, index) => {
          return {
            frame: index * movementLength,
            value: point,
          };
        })
        // Discard keys with no direction change for smoother animation
        .filter((key, index, keys) => {
          const next = keys[index + 1];
          return !next || key.value._movementAxis !== next.value._movementAxis;
        });

      const rotationKeys = this._calcRotationKeys(movementKeys);

      // TODO Cleanup animations after complete?
      const moveAnimation = new Animation(
        "walk",
        "position",
        30,
        Animation.ANIMATIONTYPE_VECTOR3,
        Animation.ANIMATIONLOOPMODE_CONSTANT
      );
      moveAnimation.setKeys(movementKeys);
      moveAnimation.setEasingFunction(easeOutQuad);
      mesh.animations.push(moveAnimation);

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
        movementKeys[movementKeys.length - 1].frame
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

    const rotationKeys = this._calcRotationKeys(keys);

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

  _calcRotationKeys(keys) {
    let previous;
    const node = new TransformNode();

    // Determine rotational direction
    const rotationKeys = keys.map((current) => {
      const key = {};
      if (previous) {
        node.position = previous.value;
        const lookAt = node.lookAt(current.value, Math.PI, 0, 0, WORLD);
        // TODO There's potentially a better way to determine which "side" to
        // take a rotation on. May want to take into account the direction of
        // travel?
        if (lookAt.rotation.y > Math.PI) {
          lookAt.rotation.y = lookAt.rotation.y - Math.PI * 2;
        }
        key.frame = current.frame;
        key.value = lookAt.rotation.clone();
      }
      previous = current;
      return key;
    });
    rotationKeys[0] = {
      frame: 0,
      value: rotationKeys[1].value,
    };

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
    rotationKeys.sort((a, b) => a.frame > b.frame);

    node.dispose();

    return rotationKeys;
  }

  _canWalkTo(current, { x = 0, z = 0 }) {
    const origin = current.clone();
    const destination = current.clone();
    const direction = new Vector3.Zero();
    direction.x += x;
    destination.x += x;
    direction.z += z;
    destination.z += z;
    const front = new Ray(origin, direction, 1);
    const down = new Ray(destination, new Vector3.Down(), 1);
    const frontPick = this.scene.pickWithRay(
      front,
      (mesh) => !mesh.isMainCharacter && !mesh.isEnemy
    );
    const downPick = this.scene.pickWithRay(down, (mesh) => mesh.isWalkable);
    return !frontPick.hit && downPick.hit;
  }
}
