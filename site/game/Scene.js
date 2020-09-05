const {
  Color3,
  Vector3,
  HemisphericLight,
  DirectionalLight,
  ShadowGenerator,
  UniversalCamera,
  WebXRState,
} = BABYLON;

export class Environment {
  constructor(scene) {
    this.scene = scene;

    // TODO Separate ground for VR player and character / tiles
    this.helper = scene.createDefaultEnvironment({
      skyboxSize: 100,
    });

    this.helper.ground.position.y = -3;

    this.setTheme([0.0, 0.1, 0.2]);
  }

  setTheme(colors) {
    const mainColor = new Color3(...colors);
    this.scene.clearColor = mainColor;
    this.scene.ambientColor = mainColor;
    this.helper.setMainColor(mainColor);
  }
}

/** @constructor */
export function AmbientLight(scene) {
  // TODO Diffuse and specular colors
  const ambient = new HemisphericLight(
    "ambientLight",
    new Vector3(0, 1, 0),
    scene
  );
  ambient.intensity = 0.5;
  return ambient;
}

/** @constructor */
export function DirectLight(scene) {
  const direct = new DirectionalLight(
    "directLight",
    new Vector3(0, -10, 5),
    scene
  );
  direct.intensity = 0.8;
  direct.position.z = 0;
  direct.position.x = 0;
  return direct;
}

// TODO scene is unused
/** @constructor */
export function ShadowGen(scene, direct) {
  const shadowGenerator = new ShadowGenerator(96, direct);
  shadowGenerator.usePoissonSampling = true;
  shadowGenerator.darkness = 0.5;
  return shadowGenerator;
}

// TODO maxZ for performance?
/** @constructor */
export function IsoCam(scene) {
  const offset = 5;
  const maxDistance = 10;
  const isoCam = new UniversalCamera(
    "isoCam",
    new Vector3(0 - offset, offset, 0 - offset),
    scene
  );
  isoCam.rotation = new Vector3(Math.PI / 6, Math.PI / 6, 0);
  isoCam.position = new Vector3(-1, offset, -3);
  isoCam.speed = 0.5;
  isoCam.inputs.removeByType("FreeCameraMouseInput");
  isoCam.keysUp = [38, 87];
  isoCam.keysDown = [40, 83];
  isoCam.keysLeft = [37, 65];
  isoCam.keysRight = [39, 68];

  scene.onBeforeRenderObservable.add(() => {
    // Keep on isometric plane
    isoCam.position.y = offset;

    // Maximum distance
    if (isoCam.position.x > maxDistance - offset) {
      isoCam.position.x = maxDistance - offset;
    } else if (isoCam.position.x < 0 - maxDistance - offset) {
      isoCam.position.x = 0 - maxDistance - offset;
    }
    if (isoCam.position.z > maxDistance - offset) {
      isoCam.position.z = maxDistance - offset;
    } else if (isoCam.position.z < 0 - maxDistance - offset) {
      isoCam.position.z = 0 - maxDistance - offset;
    }
  });

  return isoCam;
}

export function initXRHelper(scene) {
  if (window.navigator.xr) {
    // const xrTemplateCam = new UniversalCamera(
    //   "xrTemplateCam",
    //   new Vector3(0, 5, -2),
    //   scene
    // );
    // xrTemplateCam.rotation = new Vector3(Math.PI / 6, 0, 0);

    return scene
      .createDefaultXRExperienceAsync({
        // By default, XR wrecks havoc with the camera setup.
        // 1. Upon entering, xrCam inherits both the position and direction
        //    of the active camera, which is wrong and hard to reset.
        // 2. Upon exiting, the active cam's position is set to that of xrCam.
        //    Which breaks our isomorphic POV.
        //
        // This option prevents #2
        // ignoreNativeCameraTransformation: true,
        disableTeleportation: true,
        useMultiview: true,
      })
      .then((xr) => {
        const xrHelper = xr.baseExperience;
        // xrHelper.onStateChangedObservable.add((state) => {
        //   if (state === WebXRState.IN_XR) {
        //     // ... While this line prevents #1
        //     xrHelper.camera.setTransformationFromNonVRCamera(xrTemplateCam);
        //   }
        // });

        // Set camera height
        xrHelper.onInitialXRPoseSetObservable.add((xrCamera) => {
          xrCamera.position.y = 4;
        });

        return xrHelper;
      });
  } else {
    console.log("No WebXR support");
    return Promise.resolve();
  }
}
