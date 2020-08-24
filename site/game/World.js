import {
  Environment,
  AmbientLight,
  DirectLight,
  ShadowGen,
  IsoCam,
  initXRHelper,
} from "./Scene";
import { Character } from "./Character";
import { Floor, FloorMovable, Wall, WallMovable } from "./Level";
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
    this.character = new Character(this.scene, this.shadowGenerator);
    this.character.attachControlsAndCamera(this.isoCam);

    // const objects = [];
    // const selectable = [];
    // const movable = [];
    // const controllable = [];

    level.map.forEach((row) => {
      row.forEach((col) => {
        console.log({ col });

        const tile = col;
        if (tile.castsShadows) {
          // TODO
        }

        if (tile.selectable) {
          if (tile.movable) {
            if (tile.controllable) {
              // TODO
            }
          }
        }
      });
    });

    // Commented out for now. Autoplays each refresh!
    // level.intro.forEach((intro) => speak(intro));
  }
}
