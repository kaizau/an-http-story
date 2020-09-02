import events from "./events";
import { speak } from "./speak";
const { Animation, QuadraticEase, EasingFunction } = window.BABYLON;

const easeOutQuad = new QuadraticEase();
easeOutQuad.setEasingMode(EasingFunction.EASINGMODE_EASEOUT);

export class LevelFactory {
  constructor(scene, state, envHelper, meshFactory) {
    this.scene = scene;
    this.state = state;
    this.envHelper = envHelper;
    this.meshFactory = meshFactory;

    this.level = {};
    this.levelMeshes = [];

    events.on("levelCompleted", () => {
      speak(this.level.outro).then(() => {
        events.emit("levelNext");
      });
    });
  }

  async load(level) {
    await this.reset();
    this.level = level;
    this.envHelper.setTheme(level.theme);
    this.levelMeshes = await this.buildLevel(level);

    speak(level.intro);

    // TODO Only allow player control after level is built
    events.emit("levelReady");
  }

  buildLevel(level) {
    const meshesReady = [];

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
                meshesReady.push(
                  new Promise((resolve) => {
                    const targetY = mesh.position.y + y;
                    mesh.position.y += 10;
                    mesh.position.z += z;
                    mesh.position.x += x;

                    const random = Math.round(Math.random() * 1000);
                    setTimeout(() => {
                      Animation.CreateAndStartAnimation(
                        "assemble",
                        mesh,
                        "position.y",
                        30,
                        30,
                        10,
                        targetY,
                        Animation.ANIMATIONLOOPMODE_CONSTANT,
                        easeOutQuad,
                        () => resolve(mesh)
                      );
                    }, random);
                  })
                );

                // TODO Do we need to explicitly add meshes to the scene?
                // this.scene.addMesh(mesh);
              }
            });
          });
      });

    return Promise.all(meshesReady);
  }

  reset() {
    events.emit("levelReset");
    const meshesReady = [];

    this.levelMeshes.forEach((mesh) => {
      meshesReady.push(
        new Promise((resolve) => {
          const random = Math.round(Math.random() * 1000);
          setTimeout(() => {
            Animation.CreateAndStartAnimation(
              "disassemble",
              mesh,
              "position.y",
              30,
              30,
              mesh.position.y,
              mesh.position.y + 10,
              Animation.ANIMATIONLOOPMODE_CONSTANT,
              easeOutQuad,
              () => {
                mesh.dispose();
                resolve();
              }
            );
          }, random);
        })
      );
    });

    this.levelMeshes = [];
    return Promise.all(meshesReady);
  }
}
