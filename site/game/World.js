import Character from "./character";

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

  // Each level describes a scene
  async loadLevel(level) {
    this.engine.displayLoadingUI();
    if (this.scene) {
      this.scene.detachControl();
      this.scene.dispose();
    }

    const scene = new Scene(this.engine);
    scene.collisionsEnabled = true;
    // TODO How to actually enable gravity? No Ammo.js in this instance?
    scene.gravity = new Vector3(0, -9.81, 0);

    // TODO Separate player floor and "platformer" floor
    const env = scene.createDefaultEnvironment();
    env.setMainColor(new Color3(0.05, 0.2, 0.4));

    this.createLighting(scene);
    this.createFloor(scene);
    this.createCharacter(scene);
    this.createCamera(scene);
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
    const hemi = new HemisphericLight(
      "ambientLight",
      new Vector3(-0.5, -3, 0),
      scene
    );

    const directional = new DirectionalLight(
      "directionalLight",
      new Vector3(-0.5, -3, -1),
      scene
    );
    directional.intensity = 0.8;

    const shadowGenerator = new ShadowGenerator(96, directional);
    shadowGenerator.usePoissonSampling = true;
    shadowGenerator.darkness = 0.5;
  }

  createFloor(scene) {
    // https://www.babylonjs-playground.com/#21QRSK#15
    const tile = MeshBuilder.CreateBox(
      "tile",
      {
        height: 0.1,
        width: 10,
        depth: 2,
      },
      scene
    );
    tile.position.y = 0;
    tile.receiveShadows = true;
    tile.checkCollisions = true;
  }

  createCharacter(scene) {
    this.character = new Character(this.game);
    scene.addMesh(this.character.mesh);
    const light = scene.lights[scene.lights.length - 1];
    const shadowGenerator = light.getShadowGenerator();
    shadowGenerator.addShadowCaster(this.character.mesh);
  }

  // TODO Reuse VR camera once created
  createCamera(scene) {
    const character = this.character.mesh;

    const camera = new FollowCamera(
      "FollowCam",
      new Vector3(
        character.position.x,
        character.position.y + 5,
        character.position.z - 20
      ),
      scene
    );
    camera.cameraDirection = new Vector3(-1, 0, 0);
    camera.cameraAcceleration = 0;
    camera.maxCameraSpeed = 20;
    camera.attachControl(this.canvas, true);
    camera.lockedTarget = character;

    if (window.navigator.xr) {
      scene.createDefaultXRExperienceAsync({ useMultiview: true });
    } else {
      console.log("No WebXR support");
    }
  }

  createControls(scene) {
    const character = this.character.mesh;

    // Keypress events
    window.keyisdown = {};
    window.addEventListener("keydown", function (event) {
      window.keyisdown[event.keyCode] = true;
    });

    window.addEventListener("keyup", function (event) {
      window.keyisdown[event.keyCode] = false;
    });

    window.tempv = new Vector3.Zero();

    scene.registerBeforeRender(function () {
      // character speed
      var v = 0.5;
      character.nextspeed.x = 0.0;
      character.nextspeed.z = 0.00001;
      if (window.keyisdown[37]) {
        character.nextspeed.x = -v;
        character.nextspeed.z = -v;
      }
      if (window.keyisdown[39]) {
        character.nextspeed.x = v;
        character.nextspeed.z = v;
      }
      if (window.keyisdown[38]) {
        character.nextspeed.x = -v;
        character.nextspeed.z = v;
      }
      if (window.keyisdown[40]) {
        character.nextspeed.x = v;
        character.nextspeed.z = -v;
      }

      character.speed = new Vector3.Lerp(
        character.speed,
        character.nextspeed,
        0.1
      );

      // Turn to direction
      // if (character.speed.length() > 0.01) {
      //   tempv.copyFrom(character.speed);
      //   var dot = new Vector3.Dot(tempv.normalize(), Axis.Z);
      //   var al = Math.acos(dot);
      //   if (tempv.x < 0.0) {
      //     al = Math.PI * 2.0 - al;
      //   }
      //   if (window.keyisdown[9]) {
      //     console.log("dot,al:", dot, al);
      //   }
      //   if (al > character.rotation.y) {
      //     var t = Math.PI / 30;
      //   } else {
      //     var t = -Math.PI / 30;
      //   }
      //   var ad = Math.abs(character.rotation.y - al);
      //   if (ad > Math.PI) {
      //     t = -t;
      //   }
      //   if (ad < Math.PI / 15) {
      //     t = 0;
      //   }
      //   character.rotation.y += t;
      //   if (character.rotation.y > Math.PI * 2) {
      //     character.rotation.y -= Math.PI * 2;
      //   }
      //   if (character.rotation.y < 0) {
      //     character.rotation.y += Math.PI * 2;
      //   }
      // }

      character.moveWithCollisions(character.speed);

      if (character.position.x > 60.0) {
        character.position.x = 60.0;
      }
      if (character.position.x < -60.0) {
        character.position.x = -60.0;
      }
      if (character.position.z > 60.0) {
        character.position.z = 60.0;
      }
      if (character.position.z < -60.0) {
        character.position.z = -60.0;
      }
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
