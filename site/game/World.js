export default class World {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.engine = new BABYLON.Engine(this.canvas, true);

    window.addEventListener("resize", () => this.engine.resize());

    this.engine.runRenderLoop(() => {
      if (this.scene) {
        this.scene.render();
      }
    });
  }

  // Each level describes a scene
  async loadLevel(level) {
    this.engine.displayLoadingUI();
    if (this.scene) {
      this.scene.detachControl();
      this.scene.dispose();
    }

    const scene = new BABYLON.Scene(this.engine);
    this.createControls(scene);
    this.createEnvironment(scene);

    if (level.type === "chase") {
      this.createBoxScene(scene, level);
    } else {
      this.createSphereScene(scene, level);
    }

    await scene.whenReadyAsync();
    this.engine.hideLoadingUI();
    this.scene = scene;
  }

  createEnvironment(scene) {
    // TODO Diffuse and specular colors
    const hemi = new BABYLON.HemisphericLight(
      "ambientLight",
      new BABYLON.Vector3(-0.5, -3, 0),
      scene
    );
    hemi.intensity = 0.8;

    const directional = new BABYLON.DirectionalLight(
      "directionalLight",
      new BABYLON.Vector3(-0.5, -3, -1),
      scene
    );
    directional.intensity = 0.8;

    const shadowGenerator = new BABYLON.ShadowGenerator(96, directional);
    shadowGenerator.usePoissonSampling = true;

    const env = scene.createDefaultEnvironment();
    env.setMainColor(new BABYLON.Color3(0.05, 0.2, 0.4));
  }

  createControls(scene) {
    scene.createDefaultCamera(true, true, true);
    scene.activeCamera.useAutoRotationBehavior = true;
    scene.activeCamera.beta = Math.PI / 3;
    scene.activeCamera.radius = 6;

    if (window.navigator.xr) {
      scene.createDefaultXRExperienceAsync({ useMultiview: true });
    } else {
      console.log("No WebXR support");
    }
  }

  createBoxScene(scene) {
    const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
    box.position.y = 1;
    const light = scene.lights[scene.lights.length - 1];
    const shadowGenerator = light.getShadowGenerator();
    shadowGenerator.addShadowCaster(box);
  }

  createSphereScene(scene) {
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene);
    sphere.position.y = 1;
    const light = scene.lights[scene.lights.length - 1];
    const shadowGenerator = light.getShadowGenerator();
    shadowGenerator.getShadowMap().renderList.push(sphere);
  }
}
