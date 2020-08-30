import events from "./events";
import { speak } from "./speak";

export class LevelFactory {
  constructor(scene, state, env, meshFactory) {
    this.scene = scene;
    this.state = state;
    this.env = env;
    this.meshFactory = meshFactory;

    this.level = {};
    this.levelMeshes = [];

    events.on("levelCompleted", () => {
      speak(this.level.outro).then(() => {
        events.emit("levelNext");
      });
    });
  }

  load(level) {
    this.reset();
    this.level = level;
    this.env.setTheme(level.theme);
    this.levelMeshes = this.buildLevel(level);

    if (!process.env.DEBUG) {
      speak(level.intro);
    }

    // TODO Only allow player control after level is built
    events.emit("levelReady");
  }

  buildLevel(level) {
    const levelMeshes = [];

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

              // TODO Merge non-movable meshes of same type? Or use Instances?
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

                levelMeshes.push(mesh);
                // TODO What happens if we don't add meshes to the scene?
                // this.scene.addMesh(mesh);
              }
            });
          });
      });

    return levelMeshes;
  }

  // TODO Animate meshes out of the world
  reset() {
    events.emit("levelReset");
    this.levelMeshes.forEach((mesh) => mesh.dispose());
  }
}
