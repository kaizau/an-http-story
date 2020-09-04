import { playSound } from "./sounds";
import { delay, events } from "./utils";

const {
  ActionManager,
  QuadraticEase,
  EasingFunction,
  ExecuteCodeAction,
  PointerDragBehavior,
  TransformNode,
  Animation,
  Color3,
  Vector3,
  Ray,
  WORLD,
} = window.BABYLON;
const {
  OnPickTrigger,
  OnPointerOverTrigger,
  OnPointerOutTrigger,
  OnIntersectionEnterTrigger,
} = ActionManager;

const easeOutQuad = new QuadraticEase();
easeOutQuad.setEasingMode(EasingFunction.EASINGMODE_EASEOUT);

// TODO Instead of outlines, maybe glow or mesh.renderOverlay?
const primaryOutline = new Color3(0, 1, 1);
const secondaryOutline = new Color3(1, 1, 1);
const errorOutline = new Color3(1, 1, 0);

// TODO Are action managers automatically disposed when meshes are disposed?
export class MeshMixins {
  constructor(scene, state) {
    this.scene = scene;
    this.state = state;
  }

  // TODO Implement as event?
  makeSelectable(mesh) {
    mesh.outlineColor = primaryOutline;
    this._ensureActionManager(mesh);
    this.makeHoverable(mesh);

    mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPickTrigger, () => {
        if (!this.state.playerControl) return;

        // Unselect
        if (this.state.selected === mesh) {
          this.state.selected.renderOutline = false;
          this.state.selected = null;
        }
        // Replace selected
        else if (this.state.selected) {
          this.state.selected.renderOutline = false;
          this.state.selected = mesh;
          this.state.selected.renderOutline = true;
        }
        // New selected
        else {
          this.state.selected = mesh;
          this.state.selected.renderOutline = true;
        }
      })
    );
  }

  makeWalkable(mesh) {
    mesh.isWalkable = true;
    mesh.outlineColor = secondaryOutline;
    this._ensureActionManager(mesh);
    this.makeHoverable(mesh);

    mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPickTrigger, () => {
        if (!this.state.playerControl) return;

        const selected = this.state.selected;
        if (selected && selected.isControllable) {
          const target = mesh.position.clone();
          target.y = selected.position.y;
          this._walkMeshTo(selected, target);
        }
      })
    );
  }

  makeDraggable(mesh) {
    mesh.outlineColor = primaryOutline;
    const pointerDragBehavior = new PointerDragBehavior({
      dragPlaneNormal: new Vector3(0, 1, 0),
    });
    pointerDragBehavior.moveAttached = false;
    pointerDragBehavior.onDragStartObservable.add(() => {
      if (this._hasCharacterOnTop(mesh)) {
        mesh.outlineColor = errorOutline;
        mesh.renderOutline = true;
        return;
      }

      mesh.renderOutline = true;
      this.state.dragged = mesh;
    });
    pointerDragBehavior.onDragObservable.add((event) => {
      if (this._hasCharacterOnTop(mesh)) return;

      mesh.renderOutline = true;
      mesh.position.x += event.delta.x;
      mesh.position.z += event.delta.z;
      mesh.computeWorldMatrix();
      if (this._hasAnyCollision(mesh)) {
        mesh.position.x -= event.delta.x;
        mesh.position.z -= event.delta.z;
        mesh.computeWorldMatrix();
      }
    });
    pointerDragBehavior.onDragEndObservable.add(() => {
      mesh.outlineColor = primaryOutline;
      const snap = mesh.position.clone();
      snap.x = Math.round(snap.x);
      snap.z = Math.round(snap.z);
      this._floatMeshTo(mesh, snap);
      this.state.dragged = null;
      mesh.renderOutline = false;
    });
    mesh.addBehavior(pointerDragBehavior);
  }

  makeControllable(mesh) {
    mesh.isControllable = true;
  }

  makeMainCharacter(mesh) {
    mesh.isMainCharacter = true;
    this.state.mainCharacter = mesh;
  }

  makeTeleporter(mesh, id) {
    this._ensureActionManager(mesh);
    mesh.isTeleporter = true;

    events.one("levelReady", () => {
      mesh.actionManager.registerAction(
        new ExecuteCodeAction(
          {
            trigger: OnIntersectionEnterTrigger,
            parameter: this.state.mainCharacter,
          },
          () => {
            if (id === "exit") {
              if (mesh.teleporterActivated) return;
              mesh.teleporterActivated = true;
              events.emit("levelCompleted");
            } else {
              // TODO Find matching teleporter and change position of main
              // character to match
              console.log("teleport!");
            }
          }
        )
      );
    });
  }

  makeEnemy(mesh) {
    this._ensureActionManager(mesh);
    mesh.isEnemy = true;

    events.one("levelReady", () => {
      mesh.actionManager.registerAction(
        new ExecuteCodeAction(
          {
            trigger: OnIntersectionEnterTrigger,
            parameter: this.state.mainCharacter,
          },
          () => {
            this.state.playerControl = false;
            playSound("die");

            this.scene.stopAnimation(mesh);

            const initial = mesh.scaling.clone();
            const target = new Vector3(2.5, 2.5, 2.5);
            Animation.CreateAndStartAnimation(
              "swallow",
              mesh,
              "scaling",
              30,
              10,
              initial,
              target,
              Animation.ANIMATIONLOOPMODE_CONSTANT,
              easeOutQuad,
              async () => {
                this.scene.stopAnimation(this.state.mainCharacter);
                this.state.mainCharacter.dispose();
                await delay(500);
                Animation.CreateAndStartAnimation(
                  "poof",
                  mesh,
                  "scaling",
                  30,
                  10,
                  target,
                  new Vector3(0, 0, 0),
                  Animation.ANIMATIONLOOPMODE_CONSTANT,
                  easeOutQuad,
                  async () => {
                    await delay(500);
                    events.emit("levelLost");
                  }
                );
              }
            );
          }
        )
      );
    });
  }

  makePatrolling(mesh) {
    events.one("levelReady", () => {
      const y = mesh.position.y;
      const path = this.state.eyePatrolPath[y];
      if (path) {
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

        previous = null;
        const node = new TransformNode();
        const rotationKeys = keys.map((current) => {
          const key = {};
          if (previous) {
            node.position = previous.value;
            const lookAt = node.lookAt(current.value, Math.PI, 0, 0, WORLD);
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
    });
  }

  makeHoverable(mesh) {
    this._ensureActionManager(mesh);

    mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPointerOverTrigger, () => {
        mesh.renderOutline = true;
        // mesh.material.diffuseColor.scale(1.25);
      })
    );

    mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPointerOutTrigger, () => {
        if (this.state.selected !== mesh && this.state.dragged !== mesh) {
          mesh.renderOutline = false;
        }
        // mesh.material.diffuseColor.scale(0.8);
      })
    );
  }

  _ensureActionManager(mesh) {
    mesh.actionManager = mesh.actionManger || new ActionManager(this.scene);
  }

  _hasCharacterOnTop(mesh) {
    const top = new Ray(mesh.position.clone(), new Vector3.Up(), 1);
    const topPick = this.scene.pickWithRay(top, (mesh) => mesh.isMainCharacter);
    return topPick.hit;
  }

  _hasAnyCollision(mesh) {
    // Only test with meshes in camera view, on same plane
    const active = this.scene.getActiveMeshes().data;
    const samePlane = active.filter((otherMesh) => {
      return (
        mesh.position.y === otherMesh.position.y &&
        otherMesh !== mesh &&
        otherMesh.id !== "BackgroundHelper" &&
        otherMesh.id !== "BackgroundPlane" &&
        otherMesh.id !== "BackgroundSkybox"
      );
    });
    return samePlane.some((otherMesh) => mesh.intersectsMesh(otherMesh));
  }

  _floatMeshTo(mesh, target) {
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

  _walkMeshTo(mesh, target) {
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

      // Clumsy, non-mathematical rotations
      const rotationKeys = movementKeys.map((key) => {
        const axis = key.value._movementAxis;
        const sign = key.value._movementSign;
        let rotation;
        if (key.value._rotation) {
          rotation = key.value._rotation.y;
        } else if (axis === "x") {
          if (sign > 0) {
            rotation = Math.PI * (3 / 2);
          } else {
            rotation = Math.PI / 2;
          }
        } else {
          if (sign > 0) {
            rotation = Math.PI;
          } else {
            rotation = 0;
          }
        }
        return {
          frame: key.frame,
          value: new Vector3(0, rotation, 0),
        };
      });

      // TODO Cleanup animations after complete?
      const moveAnimation = new Animation(
        "move",
        "position",
        30,
        Animation.ANIMATIONTYPE_VECTOR3,
        Animation.ANIMATIONLOOPMODE_CONSTANT
      );
      moveAnimation.setKeys(movementKeys);
      moveAnimation.setEasingFunction(easeOutQuad);
      mesh.animations.push(moveAnimation);

      // TODO complete rotation in 1 tile
      const rotationAnimation = new Animation(
        "rotation",
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
