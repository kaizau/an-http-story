import {
  Environment,
  AmbientLight,
  DirectLight,
  ShadowGen,
  IsoCam,
  initXRHelper,
} from "./Scene";
import { Character } from "./Character";
import { friendSpeak, foeSpeak } from "./speak";
import FloorFactory from "./Floor";

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

    level.floor.forEach((row) => {
      row.forEach((col) => {
        console.log({ col });
      });
    });

    this.createFloor(this.scene);

    // Commented out for now. Autoplays each refresh!
    // level.intro.forEach((intro) => speak(intro));
  }

  createFloor(scene) {
    this.floorFactory = new FloorFactory(scene);
    const tile = this.floorFactory.createTile();
    scene.addMesh(tile);
  }
}
