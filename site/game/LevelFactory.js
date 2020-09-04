import { playSound } from "./sounds";
import { events } from "./utils";
import { ZYR, TLX, ___, __M, EYE, EY1, EY2, EY3, EY4 } from "./levels";
const { Vector3 } = window.BABYLON;

export class LevelFactory {
  constructor(scene, state, envHelper, meshFactory, animationMixins, dialogue) {
    this.scene = scene;
    this.state = state;
    this.envHelper = envHelper;
    this.meshFactory = meshFactory;
    this.animationMixins = animationMixins;
    this.dialogue = dialogue;

    this.level = {};
    this.levelMeshes = [];
    this.state.eyePatrolPath = {};

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

    events.emit("levelReady");
    this.state.playerControl = true;
    await this.dialogue.load(level.intro);
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

              let mesh;
              switch (code) {
                case ___:
                  mesh = this.meshFactory.createBlock();
                  break;
                case __M:
                  mesh = this.meshFactory.createBlockMovable();
                  break;
                case EYE:
                  mesh = this.meshFactory.createEye();
                  break;
                case EY1:
                case EY2:
                case EY3:
                case EY4:
                  this.state.eyePatrolPath[y] =
                    this.state.eyePatrolPath[y] || {};
                  this.state.eyePatrolPath[y][code] = new Vector3(x, y, z);
                  break;
                case ZYR:
                  mesh = this.meshFactory.createCharacter();
                  break;
                case TLX:
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

                    const delay = (y + 1) * 600;
                    const random = Math.round(Math.random() * 600 + delay);
                    setTimeout(() => {
                      this.animationMixins.enterScene(mesh, targetY, () => {
                        resolve(mesh);
                      });
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
            this.animationMixins.exitScene(mesh, () => {
              mesh.dispose();
              resolve();
            });
          }, random);
        })
      );
    });

    this.levelMeshes = [];
    this.state.eyePatrolPath = {};
    return Promise.all(meshesReady);
  }
}
