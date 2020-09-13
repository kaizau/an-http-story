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

    this._ambientLight = new AmbientLight(this._scene);
    this._directLight = new DirectLight(this._scene);
    this._shadows = new ShadowGen(this._directLight);
    this._isoCam = new IsoCam(this._scene);
    this._envHelper = new Environment(this._scene);

    this._scene.activeCamera = this._isoCam;
    this._isoCam.attachControl(this._canvas);
    this._dialogue = new Dialogue(this._scene);

    this._animationMixins = new AnimationMixins(this._scene, this._state);
    this._meshMixins = new MeshMixins(
      this._scene,
      this._state,
      this._animationMixins,
      this._shadows
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
      ls.set(
        "OS13kTrophy,👁,An HTTP Story,2 + 2 = 5",
        "Your reeducation will begin immediately."
      );
      if (isCustom) {
        this._end();
      } else {
        this._end("lose");
      }
    });
  }

  $load(data) {
    if (typeof data === "object") {
      ls.set(
        "OS13kTrophy,🌍,An HTTP Story,Builder of Worlds",
        "90% consume, 9% comment, 1% create. You are the 1%."
      );
      playMusic("404");
      return this._levelFactory.$load(data);
    }

    const id = data;
    const total = Object.keys(levels).map((key) => parseInt(key));
    const last = Math.max(...total);
    const level = levels[id];

    if (level) {
      this._state.$currentLevel = id;
      ls.pushTo("AHS", this._state.$currentLevel);

      // 1, 2
      if (id < 3) {
        playMusic("404");
      }
      // 3, 4, 5
      else if (id < 6) {
        playMusic("401");
      }
      // 6, 7
      else if (id < last) {
        playMusic("403");
      }
      // 8
      else {
        stopMusic();
      }

      this._levelFactory.$load(level);
    } else {
      if (this._state.$currentLevel === last) {
        ls.set(
          "OS13kTrophy,🏖,An HTTP Story,Out of the Sandbox",
          "Um... Zyra isn't an AGI, right?"
        );
        this._end("win");
      } else {
        this._end();
      }
    }
  }

  // Oculus browser freezes when page is refreshed with a query string. Using
  // localStorage instead.
  async _end(ending) {
    if (ending) {
      ls.set("AHS-ending", ending);
    }
    await this._levelFactory.$reset();
    location.reload();
  }
}
