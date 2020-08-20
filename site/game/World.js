export default class World {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.engine = new BABYLON.Engine(this.canvas, true);
    window.addEventListener("resize", () => this.engine.resize());

    this.scene = this.createScene();

    // await world.ready to ensure async tasks are completed
    this.ready = this.enableWebXR();
  }

  createScene() {
    const scene = new BABYLON.Scene(this.engine);

    // Debug with Shift+I
    window.addEventListener("keydown", (ev) => {
      if (ev.shiftKey && ev.keyCode === 73) {
        if (scene.debugLayer.isVisible()) {
          scene.debugLayer.hide();
        } else {
          scene.debugLayer.show();
        }
      }
    });

    // Set up camera
    const camera = new BABYLON.FreeCamera(
      "camera1",
      new BABYLON.Vector3(0, 5, -10),
      scene
    );
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(this.canvas, true);

    // Set up lighting
    const light = new BABYLON.HemisphericLight(
      "light1",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );
    light.intensity = 0.7;

    // Create geometry
    const sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
    sphere.position.y = 1;

    this.env = scene.createDefaultEnvironment();

    // Init render loop
    this.engine.runRenderLoop(function onRender() {
      scene.render();
    });

    return scene;
  }

  async enableWebXR() {
    if (window.navigator.xr) {
      await scene.createDefaultXRExperienceAsync({
        floorMeshes: [this.env.ground],
      });
    } else {
      console.log("No WebXR support");
    }
  }

  // TODO Ability to change scenes, change levels
  loadLevel() {}
}
