import Character from "./character";
import FloorFactory from "./floor";

const {
  Engine,
  Scene,
  Vector3,
  Color3,
  HemisphericLight,
  DirectionalLight,
  ShadowGenerator,
  MeshBuilder,
  FollowCamera,
  Axis,
  WebXRState,
} = BABYLON;

export default class World {
  constructor() {
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
    if (this.scene) {
      this.scene.detachControl();
      this.scene.dispose();
    }

    const scene = new Scene(this.engine);

    scene.collisionsEnabled = true;
    // TODO How to enable gravity? No Ammo.js in this instance?
    scene.gravity = new Vector3(0, -9.81, 0);

    const mainColor = new Color3(0.05, 0.2, 0.4);
    scene.clearColor = mainColor;
    scene.ambientColor = mainColor;

    // TODO Separate ground for VR player and character / tiles
    const env = scene.createDefaultEnvironment({
      createGround: false,
      skyboxSize: 100,
    });
    env.setMainColor(mainColor);

    this.createLighting(scene);
    this.createFloor(scene);

    // For now, camera and Controls both depend on Character
    this.createCharacter(scene);
    this.createCameras(scene);
    this.createControls(scene);

    if (level.type === "chase") {
      this.createSphereScene(scene, level);
    } else {
      this.createSphereScene(scene, level);
    }

    await scene.whenReadyAsync();
    this.engine.hideLoadingUI();
    this.scene = scene;
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

  createCameras(scene) {
    const character = this.character.mesh;

    const defaultCam = new FollowCamera(
      "defaultCam",
      new Vector3(
        character.position.x,
        character.position.y + 10,
        character.position.z - 15
      ),
      scene
    );
    defaultCam.cameraAcceleration = 0;
    defaultCam.maxCameraSpeed = 20;
    defaultCam.attachControl(this.canvas, true);
    defaultCam.lockedTarget = character;

    // NOTE Instead of rotating the camera, we _could_ rotate the ground,
    // characters, etc. Thought that might just be shuffling complexity around.
    const isoCam = defaultCam.clone("isoCam");
    isoCam.name = "isoCam"; // Should be, but isn't, set by clone()
    // isoCam.cameraDirection = new Vector3(-2, 0, 0);
    scene.activeCamera = isoCam;
    this.isoCam = isoCam;

    if (window.navigator.xr) {
      scene
        .createDefaultXRExperienceAsync({
          // By default, XR wrecks havoc with the camera setup.
          // 1. Upon entering, xrCam inherits both the position and direction
          //    of isoCam, which is wrong and hard to reset.
          // 2. Upon exiting, isoCam's position is set to that of xrCam.
          //
          // This option prevents #2
          ignoreNativeCameraTransformation: true,
          disableTeleportation: true,
          useMultiview: true,
        })
        .then((xr) => {
          xr.baseExperience.onStateChangedObservable.add((state) => {
            if (state === WebXRState.IN_XR) {
              // ... While this line prevents #1
              xr.baseExperience.camera.setTransformationFromNonVRCamera(
                defaultCam
              );
            }
          });
        });
    } else {
      console.log("No WebXR support");
    }
  }

  // Shamelessly adapted from:
  // https://playground.babylonjs.com/#4NUAEA
  createControls(scene) {
    const character = this.character.mesh;
    const camera = this.isoCam;

    const v = 0.1; // character speed
    const bounds = 30.0; // character max distance
    const cameraDistance = 10;

    // NOTE Refactor this?
    const keyisdown = {};
    window.addEventListener("keydown", (event) => {
      keyisdown[event.keyCode] = true;
    });

    window.addEventListener("keyup", (event) => {
      keyisdown[event.keyCode] = false;
    });

    const tempv = new Vector3.Zero();

    scene.registerBeforeRender(() => {
      character.nextspeed.x = 0.0;
      character.nextspeed.z = 0.00001;

      // left
      if (keyisdown[37]) {
        character.nextspeed.x = -v;
        character.nextspeed.z = v;
      }
      // right
      if (keyisdown[39]) {
        character.nextspeed.x = v;
        character.nextspeed.z = -v;
      }
      // up
      if (keyisdown[38]) {
        character.nextspeed.x = v;
        character.nextspeed.z = v;
      }
      // down
      if (keyisdown[40]) {
        character.nextspeed.x = -v;
        character.nextspeed.z = -v;
      }

      character.speed = new Vector3.Lerp(
        character.speed,
        character.nextspeed,
        0.1
      );

      // Turn to direction
      if (character.speed.length() > 0.01) {
        tempv.copyFrom(character.speed);

        const dot = Vector3.Dot(tempv.normalize(), Axis.Z);
        let al = Math.acos(dot);
        if (tempv.x < 0.0) {
          al = Math.PI * 2.0 - al;
        }
        let t;
        if (al > character.rotation.y) {
          t = Math.PI / 30;
        } else {
          t = -Math.PI / 30;
        }
        const ad = Math.abs(character.rotation.y - al);
        if (ad > Math.PI) {
          t = -t;
        }
        if (ad < Math.PI / 15) {
          t = 0;
        }
        character.rotation.y += t;
        if (character.rotation.y > Math.PI * 2) {
          character.rotation.y -= Math.PI * 2;
        }
        if (character.rotation.y < 0) {
          character.rotation.y += Math.PI * 2;
        }
      }

      character.moveWithCollisions(character.speed);

      if (character.position.x > bounds) {
        character.position.x = bounds;
      } else if (character.position.x < 0 - bounds) {
        character.position.x = 0 - bounds;
      }
      if (character.position.z > bounds) {
        character.position.z = bounds;
      } else if (character.position.z < 0 - bounds) {
        character.position.z = 0 - bounds;
      }

      camera.position.x = character.position.x - cameraDistance;
      camera.position.y = character.position.y + cameraDistance;
      camera.position.z = character.position.z - cameraDistance;
    });
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
