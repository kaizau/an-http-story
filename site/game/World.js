import {
  Environment,
  AmbientLight,
  DirectLight,
  ShadowGen,
  IsoCam,
  initXRHelper,
} from "./Scene";
import { Controls } from "./Controls";
import { LevelBuilder } from "./LevelBuilder";
import { friendSpeak, foeSpeak } from "./speak";
const { Engine, Scene } = BABYLON;

export default class World {
  constructor(game) {
    this.game = game;
    this.state = {}; // TODO Expand on this?

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

    this.isoCam = new IsoCam(this.scene, this.state);
    this.scene.activeCamera = this.isoCam;

    this.controls = new Controls(this.scene);
    this.builder = new LevelBuilder(
      this.scene,
      this.state,
      this.shadowGenerator
    );

    initXRHelper(this.scene, this.isoCam).then((xrHelper) => {
      this.xrHelper = xrHelper;
    });

    this.levelObjects = [];
    this.movingObjects = [];
    // this.scene.registerBeforeRender(() => {
    //   this.movingObjects.forEach((item) => {
    //     if (item.movePath && item.movePath.length) {
    //       const next = item.movePath.shift();
    //       item.mesh.position = next;
    //       // TODO Apply rotations
    //     }
    //   });
    // });
  }

  loadLevel(level) {
    this.env.setTheme(level.theme);

    this.levelObjects.forEach((obj) => {
      // TODO ensure objects are GC'ed
      obj.mesh.dispose();
    });

    this.levelObjects = this.builder.build(level);
    this.movingObjects = this.levelObjects.filter((item) => item.movable);

    // Commented out for now. Autoplays each refresh!
    // level.intro.forEach((intro) => friendSpeak(intro));
  }
}
