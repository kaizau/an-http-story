import {
  Environment,
  AmbientLight,
  DirectLight,
  ShadowGen,
  IsoCam,
  initXRHelper,
} from "./Scene";
import { Floor, FloorMovable, Wall, WallMovable, Teleporter } from "./Level";
import { Character } from "./Character";
import { friendSpeak, foeSpeak } from "./speak";

const { Engine, Scene } = BABYLON;

export default class World {
  constructor(game) {
    this.game = game;
    this.canvas = document.getElementById("canvas");
    this.engine = new Engine(this.canvas, true);
    this.engine.runRenderLoop(() => {
      if (this.scene) this.scene.render();
    });
    window.addEventListener("resize", () => this.engine.resize());

    this.scene = new Scene(this.engine);
    this.scene.collisionsEnabled = true;

    this.env = new Environment(this.scene);
    this.ambientLight = new AmbientLight(this.scene);
    this.directLight = new DirectLight(this.scene);
    this.shadowGenerator = new ShadowGen(this.scene, this.directLight);

    this.isoCam = new IsoCam(this.scene);
    this.scene.activeCamera = this.isoCam;

    initXRHelper(this.scene, this.isoCam).then((xrHelper) => {
      this.xrHelper = xrHelper;
    });
  }

  loadLevel(level) {
    this.env.setTheme(level.theme);

    if (this.levelObjects) {
      this.levelObjects.forEach((obj) => {
        // TODO ensure objects are GC'ed
        obj.mesh.dispose();
      });
    }
    this.levelObjects = [];

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
                  this.character = new Character(this.scene);
                  this.character.attachControlsAndCamera(this.isoCam);
                  tile = this.character;
                  break;
                case "$":
                  tile = new Teleporter(id);
                  break;
              }

              if (tile) {
                tile.mesh.position.y += y;
                tile.mesh.position.z += z;
                tile.mesh.position.x += x;

                this.levelObjects.push(tile);
                // TODO What happens if we don't add meshes to the scene?
                // this.scene.addMesh(tile.mesh);

                if (tile.castsShadows) {
                  this.shadowGenerator.addShadowCaster(tile.mesh);
                }
              }
            });
          });
      });

    // Commented out for now. Autoplays each refresh!
    // level.intro.forEach((intro) => friendSpeak(intro));
  }
}
