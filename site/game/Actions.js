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
          console.log("selected", item);
        }
      })
    );
  }

  walkable(item) {
    item.mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPickTrigger, () => {
        if (this.state.selected && this.state.selected.controllable) {
          const current = this.state.selected.mesh.position.clone();
          const target = item.mesh.position.clone();
          target.y = current.y;

          this.state.selected.moveTo = target;

          // Draw line between current and target
          const points = [];
          points.push(current.clone());

          let i = 0;
          while (i < 10 && (current.x !== target.x || current.z !== target.z)) {
            i++;

            const xDiff = target.x - current.x;
            const zDiff = target.z - current.z;

            if (xDiff > 0 && this.canWalk(current, { x: 1 })) {
              current.x += 1;
            } else if (xDiff < 0 && this.canWalk(current, { x: -1 })) {
              current.x -= 1;
            } else if (zDiff > 0 && this.canWalk(current, { z: 1 })) {
              current.z += 1;
            } else if (zDiff < 0 && this.canWalk(current, { z: -1 })) {
              current.z -= 1;
            }

            // TODO ensure not blocked

            points.push(current.clone());
          }

          if (this.state.path) {
            this.state.path.dispose();
          }
          this.state.path = BABYLON.MeshBuilder.CreateLines(
            "movePath",
            { points },
            this.scene
          );
          this.state.path.color = new BABYLON.Color3(1, 0, 0);
        }
      })
    );
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
