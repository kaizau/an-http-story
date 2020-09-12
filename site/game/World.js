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
import { playMusic, stopMusic } from "./music";
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

    initXRHelper(this._scene, this._dialogue);
    // .then((xrHelper) => {
    //   this._xrHelper = xrHelper;
    // });

    this._scene.executeWhenReady(() => {
      this.$load(initialLevel);
    });

    events.on("next", () => {
      this.$load(this._state.$currentLevel + 1);
    });

    events.on("lost", () => {
      const isCustom = !this._state.$currentLevel;
      this._end(isCustom ? "" : "?ending=0");
    });
  }

  $load(data) {
    if (typeof data === "object") {
      return this._levelFactory.$load(data);
    }

    const id = data;
    const total = Object.keys(levels).map((key) => parseInt(key));
    const last = Math.max(...total);
    const level = levels[id];

    if (level) {
      this._state.$currentLevel = id;
      ls.pushTo("AHS", this._state.$currentLevel);

      if (id === last) {
        events.one("ready", stopMusic);
      } else {
        if (id < 3) {
          playMusic("404", 100 + id * 20);
        } else {
          playMusic("401", 100 + id * 10);
        }
      }

      this._levelFactory.$load(level);
    } else {
      if (this._state.$currentLevel === last) {
        this._end("?ending=1");
      } else {
        this._end();
      }
    }
  }

  // TODO Fade to white
  async _end(ending = "") {
    await this._levelFactory.$reset();
    location.href = location.pathname + ending;
  }
}
