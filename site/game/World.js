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
    this.controls = new Controls(this.scene, this.isoCam);
    this.builder = new LevelBuilder(this.shadowGenerator);

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
    this.levelObjects = this.builder.build(level);
    // TODO attach controls on select?

    // Commented out for now. Autoplays each refresh!
    // level.intro.forEach((intro) => friendSpeak(intro));
  }
}
