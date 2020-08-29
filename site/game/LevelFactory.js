export class LevelFactory {
  constructor(scene, state, meshFactory) {
    this.scene = scene;
    this.state = state;
    this.meshFactory = meshFactory;

    this.levelMeshes = [];
    this.state.levelReady = Promise.resolve();
  }

  // TODO Merge non-movable meshes of same type? Or use Instances?
  create(level) {
    this.reset();
    this.state.winLevel = this.winLevel;
    this.state.levelReady = this.buildLevel(level);
  }

  winLevel() {
    console.log("win");
  }

  async buildLevel(level) {
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

              let mesh;
              switch (code) {
                case "_":
                  mesh = this.meshFactory.createBlock();
                  break;
                case "m":
                  mesh = this.meshFactory.createBlockMovable();
                  break;
                case "^":
                  mesh = this.meshFactory.createCharacter();
                  break;
                case "$":
                  mesh = this.meshFactory.createTeleporter("exit");
                  break;
              }

              if (mesh) {
                // TODO Animate meshes into the world
                // Staggered starts for an "assembly" effect
                mesh.position.y += y;
                mesh.position.z += z;
                mesh.position.x += x;

                this.levelMeshes.push(mesh);
                // TODO What happens if we don't add meshes to the scene?
                // this.scene.addMesh(mesh);
              }
            });
          });
      });

    // TODO Only allow player control after level is built
    return this.levelMeshes;
  }

  reset() {
    // TODO Animate meshes out of the world
    this.levelMeshes.forEach((mesh) => mesh.dispose());
  }
}
