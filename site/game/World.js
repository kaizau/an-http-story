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

    if (level.type === "chase") {
      this.createBoxScene(scene, level);
    } else if (level.type === "smash") {
      this.createSphereScene(scene, level);
    }

    scene.createDefaultCameraOrLight(true, true, true);
    const env = scene.createDefaultEnvironment();
    env.setMainColor(new BABYLON.Color3(0.05, 0.2, 0.4));
    if (window.navigator.xr) {
      scene.createDefaultXRExperienceAsync({ useMultiview: true });
    } else {
      console.log("No WebXR support");
    }

    await scene.whenReadyAsync();
    this.engine.hideLoadingUI();
    this.scene = scene;
  }

  createBoxScene(scene) {
    const sphere = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
    sphere.position.y = 1;
  }

  createSphereScene(scene) {
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene);
    sphere.position.y = 1;
  }
}
