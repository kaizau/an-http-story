const { FollowCamera, Vector3, WebXRState } = BABYLON;

// NOTE Instead of rotating the camera, we _could_ rotate the ground,
// characters, etc. Thought that might just be shuffling complexity around.
export function IsoCam(scene) {
  const isoCam = new FollowCamera("isoCam", new Vector3(-10, 10, -10), scene);
  isoCam.rotation = new Vector3(Math.PI / 6, Math.PI / 4, 0);
  return isoCam;
}

export async function initXRHelper(scene, isoCam) {
  if (window.navigator.xr) {
    const defaultCam = new FollowCamera(
      "defaultCam",
      new Vector3(0, 10, -10),
      scene
    );
    defaultCam.rotation = new Vector3(Math.PI / 6, 0, 0);

    return scene
      .createDefaultXRExperienceAsync({
        // By default, XR wrecks havoc with the camera setup.
        // 1. Upon entering, xrCam inherits both the position and direction
        //    of the active camera, which is wrong and hard to reset.
        // 2. Upon exiting, the active cam's position is set to that of xrCam.
        //    Which breaks our isomorphic POV.
        //
        // This option prevents #2
        ignoreNativeCameraTransformation: true,
        disableTeleportation: true,
        useMultiview: true,
      })
      .then((xr) => {
        const xrHelper = xr.baseExperience;
        xrHelper.onStateChangedObservable.add((state) => {
          if (state === WebXRState.IN_XR) {
            // ... While this line prevents #1
            xrHelper.camera.setTransformationFromNonVRCamera(defaultCam);
          }
        });
        return xrHelper;
      });
  } else {
    console.log("No WebXR support");
  }
}
