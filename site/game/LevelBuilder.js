import { Block, BlockMovable, Character, Teleporter } from "./LevelComponents";
import { Actions } from "./Actions";
const { Vector3, ActionManager } = BABYLON;

export class LevelBuilder {
  constructor(scene, shadowGenerator) {
    this.scene = scene;
    this.shadowGenerator = shadowGenerator;

    // TODO Implement real state
    this.state = {};
    this.actions = new Actions(this.scene, this.state);
  }

  build(level) {
    const levelObjects = [];

    // TODO Combine non-movable meshes of same type
    // Start from bottom layer
    level.map
      .slice()
      .reverse()
      .forEach((layer, layerIndex) => {
        const y = -1 + layerIndex;

        // And bottom row
        layer
          .slice()
          .reverse()
          .forEach((row, rowIndex) => {
            const x = 0 + rowIndex;

            row.forEach((code, colIndex) => {
              const z = 5 - colIndex;
              const id = `z${z}x${x}`;

              let item;
              switch (code) {
                case " ":
                  break;
                case "_":
                  item = new Block(id);
                  break;
                case "m":
                  item = new BlockMovable(id);
                  break;
                case "^":
                  item = new Character();
                  break;
                case "$":
                  item = new Teleporter();
                  break;
              }

              if (item) {
                item.mesh.position.y += y;
                item.mesh.position.z += z;
                item.mesh.position.x += x;

                levelObjects.push(item);
                // TODO What happens if we don't add meshes to the scene?
                // this.scene.addMesh(item.mesh);

                // TODO Actions better as mixins in LevelComponents instead?
                if (item.selectable || item.walkable || item.controllable) {
                  item.mesh.actionManager = new ActionManager(this.scene);
                }

                if (item.selectable) {
                  this.actions.selectable(item);
                }

                if (item.walkable) {
                  this.actions.walkable(item);
                }

                if (item.movable) {
                  item.mesh.speed = new Vector3.Zero();
                  item.mesh.nextspeed = new Vector3.Zero();
                }

                if (item.castsShadows) {
                  this.shadowGenerator.addShadowCaster(item.mesh);
                }

                if (item.mainCharacter) {
                }

                if (item.winTrigger) {
                }
              }
            });
          });
      });

    return levelObjects;
  }
}
