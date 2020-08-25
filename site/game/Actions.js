const { ActionManager, ExecuteCodeAction, SwitchBooleanAction } = BABYLON;
const { OnPickTrigger } = ActionManager;

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
          const current = selected.mesh.position.clone();
          const target = item.mesh.position.clone();
          target.y = current.y;

          // Draw line between current and target
          const points = [];
          points.push(current.clone());

          let i = 0;
          while (i < 10 && (current.x !== target.x || current.z !== target.z)) {
            i++;
            let xDiff = target.x - current.x;
            xDiff = xDiff > 0 ? Math.min(xDiff, 1) : Math.max(xDiff, -1);
            if (Math.abs(xDiff) > 0 && this.canWalk(current, { x: xDiff })) {
              current.x += xDiff;
              points.push(current.clone());
              continue;
            }

            let zDiff = target.z - current.z;
            zDiff = zDiff > 0 ? Math.min(zDiff, 1) : Math.max(zDiff, -1);
            if (Math.abs(zDiff) > 0 && this.canWalk(current, { z: zDiff })) {
              current.z += zDiff;
              points.push(current.clone());
            }
          }
          // console.log(points.slice());

          if (points.length > 1) {
            // TODO Improve with gradual acceleration. Vector3.Lerp the first array?
            const frames = 10;
            const expandedPoints = points
              .slice()
              .map((current, index) => {
                const expanded = [];
                const next = points[index + 1];
                if (next) {
                  const xDiff = (next.x - current.x) / frames;
                  const zDiff = (next.z - current.z) / frames;
                  do {
                    const frame = current.clone();
                    expanded.push(frame);
                    current.x += xDiff;
                    current.z += zDiff;
                  } while (expanded.length < frames);
                } else {
                  expanded.push(current.clone());
                }
                return expanded;
              })
              .flat();

            // console.log(expandedPoints.slice());
            selected.movePath = expandedPoints;
          }
        }
      })
    );
  }

  // TODO breaks when changing directions
  addPoints(points, current, { x = 0, z = 0 }) {
    points.push(current.clone());
    const next = current.clone();
    const divisions = 10;
    for (let i = 1; i < divisions; i++) {
      next.x += x / divisions;
      next.z += z / divisions;
      points.push(next.clone());
    }
  }

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
