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
          console.log("movement for", this.state.selected);
        }
      })
    );
  }

  // Win when character enters portal
  // OnIntersectionEnterTrigger

  // Lose when character touches enemy
  // OnIntersectionEnterTrigger
}
