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
    const camera = new BABYLON.FreeCamera(
      "camera1",
      new BABYLON.Vector3(0, 5, -10),
      scene
    );
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(this.canvas, true);
    const light = new BABYLON.HemisphericLight(
      "light1",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );
    light.intensity = 0.7;
    if (level.type === "chase") {
      this.createBoxScene(scene, level);
    } else if (level.type === "smash") {
      this.createSphereScene(scene, level);
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

  // TODO
  // this.env = scene.createDefaultEnvironment();
  // this.enableWebXR()
  async enableWebXR() {
    if (window.navigator.xr) {
      await this.scene.createDefaultXRExperienceAsync({
        floorMeshes: [this.env.ground],
      });
    } else {
      console.log("No WebXR support");
    }
  }
}
