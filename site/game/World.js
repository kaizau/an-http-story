import {
  Environment,
  AmbientLight,
  DirectLight,
  ShadowGen,
  IsoCam,
  initXRHelper,
} from "./Scene";
import { Character } from "./Character";
import FloorFactory from "./Floor";

const { Engine, Scene, MeshBuilder } = BABYLON;

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
    // TODO Custom loading UI
    // this.engine.displayLoadingUI();

    this.env.setTheme(level.theme || "dark");
    if (level.type === "chase") {
      this.character = new Character(this.scene, this.shadowGenerator);
      this.character.attachControlsAndCamera(this.isoCam);

      this.createFloor(this.scene);
      this.createSphereScene(this.scene, level);
    } else {
      this.createSphereScene(this.scene, level);
    }

    // await scene.whenReadyAsync();
    // this.engine.hideLoadingUI();
  }

  createFloor(scene) {
    this.floorFactory = new FloorFactory(scene);
    const tile = this.floorFactory.createTile();
    scene.addMesh(tile);
  }

  createSphereScene(scene) {
    const sphere = MeshBuilder.CreateSphere("sphere", {}, scene);
    sphere.position.y = 1;
    sphere.position.x = 1.5;
    sphere.position.z = 2;
    const light = scene.lights[scene.lights.length - 1];
    const shadowGenerator = light.getShadowGenerator();
    shadowGenerator.getShadowMap().renderList.push(sphere);
  }
}

// Unlikely to fit within 13k limit... :(
// importMesh(scene) {
//   SceneLoader.ImportMesh(
//     "",
//     "meshes/",
//     "cat.gltf",
//     scene,
//     (meshes, particleSystems, skeletons) => {
//       const cat = meshes[0];
//       cat.position.x = 1;
//       cat.position.z = -0.5;
//       scene.beginAnimation(skeletons[0], 0, 100, true);
//     }
//   );
// }
