import { Floor, FloorMovable, Character, Teleporter } from "./LevelComponents";
const { Vector3 } = BABYLON;

export class LevelBuilder {
  constructor(shadowGenerator) {
    this.shadowGenerator = shadowGenerator;
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

            row.forEach((item, colIndex) => {
              const z = 5 - colIndex;
              const id = `z${z}x${x}`;

              let tile;
              switch (item) {
                case " ":
                  break;
                case "_":
                  tile = new Floor(id);
                  break;
                case "m":
                  tile = new FloorMovable(id);
                  break;
                case "^":
                  tile = new Character();
                  break;
                case "$":
                  tile = new Teleporter();
                  break;
              }

              if (tile) {
                tile.mesh.position.y += y;
                tile.mesh.position.z += z;
                tile.mesh.position.x += x;

                levelObjects.push(tile);
                // TODO What happens if we don't add meshes to the scene?
                // this.scene.addMesh(tile.mesh);

                // TODO Use movement intents for click / select movement?
                if (tile.movable) {
                  tile.mesh.speed = new Vector3.Zero();
                  tile.mesh.nextspeed = new Vector3.Zero();
                }

                if (tile.castsShadows) {
                  this.shadowGenerator.addShadowCaster(tile.mesh);
                }
              }
            });
          });
      });

    return levelObjects;
  }
}
