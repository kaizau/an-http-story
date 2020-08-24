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
    this.env.setTheme("dark");

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

    // const objects = [];
    // const selectable = [];
    // const movable = [];
    // const controllable = [];

    // Start from bottom layer
    level.map.reverse().forEach((layer, layerIndex) => {
      const y = -1 + layerIndex;

      // And bottom row
      layer.reverse().forEach((row, rowIndex) => {
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
              this.character = new Character(this.scene, this.shadowGenerator);
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
          }
          //           if (item && item !== " ") {
          //             console.log(id);

          //             console.log(item, tile);
          //             if (tile.castsShadows) {
          //               // TODO
          //             }

          //             if (tile.selectable) {
          //               if (tile.movable) {
          //                 if (tile.controllable) {
          //                   // TODO
          //                 }
          //               }
          //             }
          //           }
        });
      });
    });

    // Commented out for now. Autoplays each refresh!
    // level.intro.forEach((intro) => speak(intro));
  }
}
