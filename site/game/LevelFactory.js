import events from "./events";
import { playSound } from "./sounds";
const { Animation, QuadraticEase, EasingFunction } = window.BABYLON;

const easeOutQuad = new QuadraticEase();
easeOutQuad.setEasingMode(EasingFunction.EASINGMODE_EASEOUT);

export class LevelFactory {
  constructor(scene, state, envHelper, meshFactory, dialogue) {
    this.scene = scene;
    this.state = state;
    this.envHelper = envHelper;
    this.meshFactory = meshFactory;
    this.dialogue = dialogue;

    this.level = {};
    this.levelMeshes = [];

    events.on("levelCompleted", async () => {
      this.state.playerControl = false;
      if (this.state.selected) {
        this.state.selected.renderOutline = false;
      }
      this.state.selected = null;

      await this.dialogue.load(this.level.outro);

      events.emit("levelNext");
    });
  }

  async load(level) {
    await this.reset();
    this.level = level;
    this.envHelper.setTheme(level.theme);
    this.levelMeshes = await this.buildLevel(level);

    this.state.playerControl = true;
    await this.dialogue.load(level.intro);

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

                    let random = Math.round(Math.random() * 600);
                    if (mesh.isMainCharacter || mesh.isTeleporter) {
                      random += 600;
                    }
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
          let random = Math.round(Math.random() * 600);
          if (!mesh.isMainCharacter && !mesh.isTeleporter) {
            random += 600;
          }
          setTimeout(() => {
            if (mesh.isMainCharacter) {
              playSound("teleport");
            }
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
