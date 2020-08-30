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
import levels from "./levels";
import events from "./events";
import progress from "./progress";
const { Engine, Scene } = BABYLON;

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
    this.env = new Environment(this.scene);

    this.ambientLight = new AmbientLight(this.scene);
    this.directLight = new DirectLight(this.scene);
    this.shadows = new ShadowGen(this.scene, this.directLight);
    this.isoCam = new IsoCam(this.scene);
    this.scene.activeCamera = this.isoCam;

    this.actionFactory = new ActionFactory(this.scene, this.state);
    this.meshFactory = new MeshFactory(
      this.scene,
      this.actionFactory,
      this.shadows
    );
    this.levelFactory = new LevelFactory(
      this.scene,
      this.state,
      this.env,
      this.meshFactory
    );

    initXRHelper(this.scene, this.isoCam).then((xrHelper) => {
      this.xrHelper = xrHelper;
    });

    this.scene.executeWhenReady(() => {
      this.load(initialLevel);
    });

    events.on("levelDone", (winState) => {
      if (winState === "win") {
        progress.add(this.state.currentLevel);

        // TODO Load different level depending on teleporter metadata?
        this.load(this.state.currentLevel + 1);
      } else if (winState === "lose") {
        this.lose();
      }
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

  win() {
    location.href = "?ending=1";
  }

  lose() {
    location.href = "?ending=0";
  }
}
