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
import { events, ls } from "./utils";
import { Engine, Scene } from "BABYLON";

export default class World {
  constructor(initialLevel) {
    this._state = {};

    this._canvas = document.querySelector(".cv");
    this._engine = new Engine(this._canvas, true);
    this._engine.runRenderLoop(() => {
      if (this._scene) this._scene.render();
    });
    window.addEventListener("resize", () => this._engine.resize());

    this._scene = new Scene(this._engine);
    this._envHelper = new Environment(this._scene);

    this._ambientLight = new AmbientLight(this._scene);
    this._directLight = new DirectLight(this._scene);
    this._shadows = new ShadowGen(this._directLight);
    this._isoCam = new IsoCam(this._scene);
    this._scene.activeCamera = this._isoCam;
    this._isoCam.attachControl(this._canvas);
    this._dialogue = new Dialogue(this._scene);

    this._animationMixins = new AnimationMixins(this._scene, this._state);
    this._meshMixins = new MeshMixins(
      this._scene,
      this._state,
      this._animationMixins
    );
    this._meshFactory = new MeshFactory(
      this._state,
      this._meshMixins,
      this._shadows
    );
    this._levelFactory = new LevelFactory(
      this._state,
      this._envHelper,
      this._meshFactory,
      this._animationMixins,
      this._dialogue
    );

    this._xrHelper = {};

    initXRHelper(this._scene, this._dialogue).then((xrHelper) => {
      this._xrHelper = xrHelper;
    });

    this._scene.executeWhenReady(() => {
      this.$load(initialLevel);
    });

    events.on("levelNext", () => {
      // TODO Load different level depending on teleporter metadata?
      this.$load(parseInt(this._state.$currentLevel) + 1);
    });

    events.on("levelLost", () => {
      this._lose();
    });
  }

  $load(initial) {
    let level;
    if (typeof initial === "object") {
      level = initial;
      this._levelFactory.$load(level);
      return;
    }

    this._state.$currentLevel = initial;
    level = levels[initial];
    if (level) {
      // TODO Save games as ints, not strings
      ls.pushTo("AHS", this._state.$currentLevel.toString());
      this._levelFactory.$load(level);
    } else {
      const total = Object.keys(levels);
      const completed = ls.get("AHS", []);
      if (total.every((level) => completed.includes(level))) {
        this._win("?ending=1");
      } else {
        this._win();
      }
    }
  }

  async _win(ending = "") {
    await this._levelFactory.$reset();
    // TODO Fade to white
    location.href = location.pathname + ending;
  }

  _lose() {
    // TODO Fade to white
    location.href = location.pathname + "?ending=0";
  }
}
