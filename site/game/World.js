import {
  Environment,
  AmbientLight,
  DirectLight,
  ShadowGen,
  IsoCam,
  initXRHelper,
} from "./Scene";
import { AnimationMixins } from "./AnimationMixins";
import { MeshMixins } from "./MeshMixins";
import { MeshFactory } from "./MeshFactory";
import { LevelFactory } from "./LevelFactory";
import { Dialogue } from "./Dialogue";
import { levels } from "./levels";
import { events, progress } from "./utils";
const { Engine, Scene } = window.BABYLON;

export default class World {
  constructor(initialLevel) {
    this.state = {};

    this.canvas = document.getElementById("canvas");
    this.engine = new Engine(this.canvas, true);
    this.engine.runRenderLoop(() => {
      if (this.scene) this.scene.render();
    });
    window.addEventListener("resize", () => this.engine.resize());

    this.scene = new Scene(this.engine);
    this.envHelper = new Environment(this.scene);
    this.dialogue = new Dialogue(this.scene);

    this.ambientLight = new AmbientLight(this.scene);
    this.directLight = new DirectLight(this.scene);
    this.shadows = new ShadowGen(this.scene, this.directLight);
    this.isoCam = new IsoCam(this.scene);
    this.scene.activeCamera = this.isoCam;
    this.isoCam.attachControl(this.canvas);

    this.animationMixins = new AnimationMixins(this.scene);
    this.meshMixins = new MeshMixins(
      this.scene,
      this.state,
      this.animationMixins
    );
    this.meshFactory = new MeshFactory(
      this.scene,
      this.state,
      this.meshMixins,
      this.shadows
    );
    this.levelFactory = new LevelFactory(
      this.scene,
      this.state,
      this.envHelper,
      this.meshFactory,
      this.animationMixins,
      this.dialogue
    );

    initXRHelper(this.scene).then((xrHelper) => {
      this.xrHelper = xrHelper;
    });

    this.scene.executeWhenReady(() => {
      this.load(initialLevel);
    });

    events.on("levelNext", () => {
      progress.add(this.state.currentLevel);

      // TODO Load different level depending on teleporter metadata?
      this.load(parseInt(this.state.currentLevel) + 1);
    });

    events.on("levelLost", () => {
      this.lose();
    });
  }

  load(levelId) {
    this.state.currentLevel = levelId;
    const level = levels[levelId];
    if (level) {
      this.levelFactory.load(level);
    } else {
      const total = Object.keys(levels);
      const completed = progress.get();
      if (total.every((level) => completed.includes(level))) {
        this.win();
      }
    }
  }

  async win() {
    await this.levelFactory.reset();
    // TODO Fade to white
    location.href = location.pathname + "?ending=1";
  }

  lose() {
    // TODO Fade to white
    location.href = location.pathname + "?ending=0";
  }
}
