const { ActionManager, ExecuteCodeAction, SwitchBooleanAction } = BABYLON;
const { OnPickTrigger } = ActionManager;

const easingQuadOut = new BABYLON.QuadraticEase();
easingQuadOut.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT);

// TODO Any automatic disposal?
export class Actions {
  constructor(scene, state) {
    this.scene = scene;
    this.state = state;
  }

  selectable(item) {
    item.mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPickTrigger, () => {
        if (this.state.selected === item) {
          this.state.selected = null;
        } else if (this.state.selected) {
          // TODO Unselect existing
        } else {
          // TODO Show selected HUD info
          this.state.selected = item;
        }
      })
    );
  }

  walkable(item) {
    item.mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPickTrigger, () => {
        const selected = this.state.selected;
        if (selected && selected.controllable) {
          // TODO Extract
          const current = selected.mesh.position.clone();
          const target = item.mesh.position.clone();
          target.y = current.y;

          // Basic pathfinding
          const points = [];
          points.push(current.clone());

          let i = 0;
          while (i < 10 && (current.x !== target.x || current.z !== target.z)) {
            i++;
            let xDiff = target.x - current.x;
            xDiff = xDiff > 0 ? Math.min(xDiff, 1) : Math.max(xDiff, -1);
            if (Math.abs(xDiff) > 0 && this.canWalk(current, { x: xDiff })) {
              current.x += xDiff;
              const point = current.clone();
              point._movementAxis = "x";
              points.push(point);
              continue;
            }

            let zDiff = target.z - current.z;
            zDiff = zDiff > 0 ? Math.min(zDiff, 1) : Math.max(zDiff, -1);
            if (Math.abs(zDiff) > 0 && this.canWalk(current, { z: zDiff })) {
              current.z += zDiff;
              const point = current.clone();
              point._movementAxis = "z";
              points.push(point);
            }
          }

          if (points.length > 1) {
            const animationLength = 15;
            const keys = points
              .map((point, index) => {
                return {
                  frame: index * animationLength,
                  value: point,
                };
              })
              // Discard keys with no direction change for smoother animation
              .filter((key, index, keys) => {
                const next = keys[index + 1];
                return (
                  !next || key.value._movementAxis !== next.value._movementAxis
                );
              });

            // TODO Cleanup animations
            // TODO Rotations
            const moveAnimation = new BABYLON.Animation(
              "move",
              "position",
              30,
              BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
              BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
            );
            moveAnimation.setKeys(keys);
            moveAnimation.setEasingFunction(easingQuadOut);
            selected.mesh.animations.push(moveAnimation);
            this.scene.beginAnimation(
              selected.mesh,
              0,
              keys[keys.length - 1].frame
            );
          }

          // if (points.length > 1) {
          //   const frames = 10;
          //   const expandedPoints = points
          //     .slice()
          //     .map((current, index) => {
          //       const expanded = [];
          //       const next = points[index + 1];
          //       if (next) {
          //         // Easing acceleration

          //         if (index === 0) {
          //           console.log("first");
          //         }

          //         const xDiff = (next.x - current.x) / frames;
          //         const zDiff = (next.z - current.z) / frames;
          //         do {
          //           const frame = current.clone();
          //           expanded.push(frame);
          //           current.x += xDiff;
          //           current.z += zDiff;
          //         } while (expanded.length < frames);
          //       } else {
          //         expanded.push(current.clone());
          //       }
          //       return expanded;
          //     })
          //     .flat();

          // console.log(expandedPoints.slice());
          // selected.movePath = expandedPoints;
          // }
        }
      })
    );
  }

  // TODO Change name
  canWalk(current, { x = 0, z = 0 }) {
    const origin = current.clone();
    const direction = new BABYLON.Vector3.Zero();
    direction.x += x;
    origin.x += x;
    direction.z += z;
    origin.z += z;
    const forward = new BABYLON.Ray(origin, direction, 1);
    const down = new BABYLON.Ray(origin, new BABYLON.Vector3.Down(), 1);
    // new BABYLON.RayHelper(forward).show(this.scene);
    // new BABYLON.RayHelper(down).show(this.scene);
    const forwardPick = this.scene.pickWithRay(forward);
    const downPick = this.scene.pickWithRay(down);
    return (
      !forwardPick.hit && downPick.hit && downPick.pickedMesh._class.walkable
    );
  }

  // Win when character enters portal
  // OnIntersectionEnterTrigger

  // Lose when character touches enemy
  // OnIntersectionEnterTrigger
}
