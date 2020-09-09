let debugBar;
let axes;

initDebug();

function initDebug() {
  if (!window.world) {
    return setTimeout(initDebug, 2000);
  }

  const world = window.world;

  debugBar = createDebugBar();

  createButton("Scene Debugger", () => {
    if (!world._scene) return;
    if (world._scene.debugLayer.isVisible()) {
      world._scene.debugLayer.hide();
    } else {
      world._scene.debugLayer.show();
    }
  });

  createButton("Show Axes", () => {
    if (axes) return;
    axes = true;
    createWorldAxes(world._scene, 5);
    showLocalAxes(world._state.$mainCharacter);
  });

  createButton("Show Bounding Boxes", () => {
    world._levelFactory._levelMeshes.forEach((mesh) => {
      mesh.showBoundingBox = true;
    });
  });

  for (let level = 1; level <= 8; level++) {
    createButton(`Level ${level}`, () => {
      world.$load(level);
    });
  }
}

function createDebugBar() {
  const debugBar = document.createElement("div");
  debugBar.style.bottom = "0";
  debugBar.style.left = "0";
  debugBar.style.padding = "10px";
  debugBar.style.position = "absolute";
  debugBar.style.width = "100%";
  debugBar.style.zIndex = 100;
  debugBar.style.boxSizing = "border-box";
  document.body.appendChild(debugBar);
  return debugBar;
}

function createButton(label, handler) {
  const button = document.createElement("button");
  button.textContent = label;
  button.addEventListener("click", () => handler());
  debugBar.appendChild(button);
}

function createWorldAxes(scene, size) {
  function makeTextPlane(text, color, size) {
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
  }

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
  axisX.isPickable = false;
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
  axisY.isPickable = false;
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
  axisZ.isPickable = false;
  const zChar = makeTextPlane("Z", "blue", size / 10);
  zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
}

function showLocalAxes(mesh) {
  const size = 2;
  const axisX = BABYLON.Mesh.CreateLines("axisX", [
    new BABYLON.Vector3.Zero(),
    new BABYLON.Vector3(size, 0, 0),
    new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
    new BABYLON.Vector3(size, 0, 0),
    new BABYLON.Vector3(size * 0.95, -0.05 * size, 0),
  ]);
  axisX.color = new BABYLON.Color3(1, 0, 0);
  axisX.isPickable = false;

  const axisY = BABYLON.Mesh.CreateLines("axisY", [
    new BABYLON.Vector3.Zero(),
    new BABYLON.Vector3(0, size, 0),
    new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
    new BABYLON.Vector3(0, size, 0),
    new BABYLON.Vector3(0.05 * size, size * 0.95, 0),
  ]);
  axisY.color = new BABYLON.Color3(0, 1, 0);
  axisY.isPickable = false;

  const axisZ = BABYLON.Mesh.CreateLines("axisZ", [
    new BABYLON.Vector3.Zero(),
    new BABYLON.Vector3(0, 0, size),
    new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
    new BABYLON.Vector3(0, 0, size),
    new BABYLON.Vector3(0, 0.05 * size, size * 0.95),
  ]);
  axisZ.color = new BABYLON.Color3(0, 0, 1);
  axisZ.isPickable = false;

  axisX.parent = mesh;
  axisY.parent = mesh;
  axisZ.parent = mesh;
}
