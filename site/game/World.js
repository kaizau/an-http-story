import {
  Environment,
  AmbientLight,
  DirectLight,
  ShadowGen,
  IsoCam,
  initXRHelper,
} from "./Scene";
import { ActionFactory } from "./ActionFactory";
import { MeshFactory } from "./MeshFactory";
import { LevelFactory } from "./LevelFactory";
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
    // TODO We're not using out of the box collisions. Consider removing.
    // this.scene.collisionsEnabled = true;
    this.env = new Environment(this.scene);

    this.ambientLight = new AmbientLight(this.scene);
    this.directLight = new DirectLight(this.scene);
    this.shadows = new ShadowGen(this.scene, this.directLight);

    this.isoCam = new IsoCam(this.scene, this.state);
    this.scene.activeCamera = this.isoCam;

    this.actionFactory = new ActionFactory(this.scene, this.state);
    this.meshFactory = new MeshFactory(
      this.scene,
      this.state,
      this.actionFactory,
      this.shadows
    );
    this.levelFactory = new LevelFactory(
      this.scene,
      this.state,
      this.meshFactory
    );

    initXRHelper(this.scene, this.isoCam).then((xrHelper) => {
      this.xrHelper = xrHelper;
    });
  }

  loadLevel(level) {
    this.env.setTheme(level.theme);
    this.levelFactory.create(level);
    // Commented out for now. Autoplays each refresh!
    // level.intro.forEach((intro) => friendSpeak(intro));
  }
}
