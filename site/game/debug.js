import speak from "./speak";
import levels from "./levels";

let debugBar;
let worldAxes;

export default function debug(game, state) {
  window.game = game;
  window.state = state;

  createButton("Scene Debugger", () => {
    if (!game.world.scene) return;
    if (game.world.scene.debugLayer.isVisible()) {
      game.world.scene.debugLayer.hide();
    } else {
      game.world.scene.debugLayer.show();
    }
  });

  createButton("Show World Axes", () => {
    if (worldAxes) return;
    createWorldAxes(game.world.scene, 5);
  });

  createButton("Test Theme", () => {
    game.world.setTheme(game.world.scene, "awaken");
  });

  createButton("Test Speech", () => {
    speak("Testing speech synthesis... Do I sound acceptable?");
  });

  Object.keys(levels).forEach((key) => {
    const level = levels[key];
    createButton(`Level ${key}`, () => {
      game.world.loadLevel(level);
    });
  });
}

function createDebugBar() {
  const debugBar = document.createElement("div");
  debugBar.style.bottom = "10px";
  debugBar.style.left = "10px";
  debugBar.style.padding = "10px";
  debugBar.style.position = "absolute";
  debugBar.style.width = "100%";
  debugBar.style.zIndex = 100;
  document.body.appendChild(debugBar);
  return debugBar;
}

function createButton(label, handler) {
  debugBar = debugBar || createDebugBar();

  const button = document.createElement("button");
  button.textContent = label;
  button.addEventListener("click", () => handler());
  debugBar.appendChild(button);
}

function createWorldAxes(scene, size) {
  worldAxes = true;

  const makeTextPlane = function (text, color, size) {
    const dynamicTexture = new BABYLON.DynamicTexture(
      "DynamicTexture",
      50,
      scene,
      true
    );
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(
      text,
      5,
      40,
      "bold 36px Arial",
      color,
      "transparent",
      true
    );
    const plane = BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
    plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
    plane.material.backFaceCulling = false;
    plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
    plane.material.diffuseTexture = dynamicTexture;
    return plane;
  };
  const axisX = BABYLON.Mesh.CreateLines(
    "axisX",
    [
      BABYLON.Vector3.Zero(),
      new BABYLON.Vector3(size, 0, 0),
      new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
      new BABYLON.Vector3(size, 0, 0),
      new BABYLON.Vector3(size * 0.95, -0.05 * size, 0),
    ],
    scene
  );
  axisX.color = new BABYLON.Color3(1, 0, 0);
  const xChar = makeTextPlane("X", "red", size / 10);
  xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
  const axisY = BABYLON.Mesh.CreateLines(
    "axisY",
    [
      BABYLON.Vector3.Zero(),
      new BABYLON.Vector3(0, size, 0),
      new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
      new BABYLON.Vector3(0, size, 0),
      new BABYLON.Vector3(0.05 * size, size * 0.95, 0),
    ],
    scene
  );
  axisY.color = new BABYLON.Color3(0, 1, 0);
  const yChar = makeTextPlane("Y", "green", size / 10);
  yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
  const axisZ = BABYLON.Mesh.CreateLines(
    "axisZ",
    [
      BABYLON.Vector3.Zero(),
      new BABYLON.Vector3(0, 0, size),
      new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
      new BABYLON.Vector3(0, 0, size),
      new BABYLON.Vector3(0, 0.05 * size, size * 0.95),
    ],
    scene
  );
  axisZ.color = new BABYLON.Color3(0, 0, 1);
  const zChar = makeTextPlane("Z", "blue", size / 10);
  zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
}
