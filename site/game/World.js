import Character from "./Character";
import { IsoCam, initXRHelper } from "./Cameras";
import FloorFactory from "./Floor";

const {
  Engine,
  Scene,
  Vector3,
  Color3,
  HemisphericLight,
  DirectionalLight,
  ShadowGenerator,
  MeshBuilder,
  Axis,
} = BABYLON;

export default class World {
  constructor(game) {
    this.game = game;
    this.canvas = document.getElementById("canvas");
    this.engine = new Engine(this.canvas, true);

    window.addEventListener("resize", () => this.engine.resize());

    this.engine.runRenderLoop(() => {
      if (this.scene) {
        this.scene.render();
      }
    });
  }

  async loadLevel(level) {
    // TODO Custom loading UI
    this.engine.displayLoadingUI();

    this.scene = new Scene(this.engine);
    const scene = this.scene;

    this.createEnv(scene);
    this.setTheme(scene, "dark");
    this.createLighting(scene);

    this.isoCam = new IsoCam(scene);
    scene.activeCamera = this.isoCam;
    this.xrHelper = await initXRHelper(scene, this.isoCam);

    if (level.type === "chase") {
      this.createFloor(scene);
      this.createSphereScene(scene, level);
      // this.createControls(scene);
    } else {
      this.createSphereScene(scene, level);
    }

    await scene.whenReadyAsync();
    this.engine.hideLoadingUI();
    this.scene = scene;
  }

  createEnv(scene) {
    this.scene.collisionsEnabled = true;
    // TODO How to enable gravity? No Ammo.js in this instance?
    scene.gravity = new Vector3(0, -9.81, 0);

    // TODO Separate ground for VR player and character / tiles
    this.env = scene.createDefaultEnvironment({
      createGround: false,
      skyboxSize: 100,
    });
  }

  setTheme(scene, theme) {
    let mainColor;

    if (theme === "dark") {
      mainColor = new Color3(0.01, 0.1, 0.2);
    } else if (theme === "awaken") {
      mainColor = new Color3(0.1, 0.3, 0.4);
    }

    scene.clearColor = mainColor;
    scene.ambientColor = mainColor;
    this.env.setMainColor(mainColor);
  }

  createLighting(scene) {
    // TODO Diffuse and specular colors
    const ambient = new HemisphericLight(
      "ambientLight",
      new Vector3(0, 1, 0),
      scene
    );
    ambient.intensity = 0.5;

    const directional = new DirectionalLight(
      "directionalLight",
      new Vector3(0, -3, 1),
      scene
    );
    directional.intensity = 0.8;
    directional.position.y = 5;

    const shadowGenerator = new ShadowGenerator(96, directional);
    shadowGenerator.usePoissonSampling = true;
    shadowGenerator.darkness = 0.5;
  }

  createFloor(scene) {
    this.floorFactory = new FloorFactory(scene);
    const tile = this.floorFactory.createTile();
    scene.addMesh(tile);
  }

  // TODO Refactor to use factory pattern
  createCharacter(scene) {
    this.character = new Character(this.game);
    scene.addMesh(this.character.mesh);
    const light = scene.lights[scene.lights.length - 1];
    const shadowGenerator = light.getShadowGenerator();
    shadowGenerator.addShadowCaster(this.character.mesh);
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
