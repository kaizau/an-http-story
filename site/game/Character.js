const { MeshBuilder, Mesh, Vector3 } = BABYLON;

export default class Character {
  constructor(game) {
    this.game = game;
    this.createLow();
  }

  // Just a head
  createLow() {
    const body = MeshBuilder.CreateBox("character", {
      height: 1,
      width: 0.25,
      depth: 0.15,
    });
    body.position.y = 0.75;

    // TODO Better head shape?
    // https://www.babylonjs-playground.com/#21QRSK#15
    const head = MeshBuilder.CreateBox("head", {
      height: 0.2,
      width: 0.15,
      depth: 0.1,
    });
    head.position.y = 1.5;

    this.mesh = Mesh.MergeMeshes([body, head], true);
    this.mesh.checkCollisions = true;
    this.mesh.applyGravity = true; // TODO Necessary?
    this.mesh.ellipsoid = new Vector3(0.9, 0.45, 0.9); // TODO Adjust
    this.mesh.speed = new Vector3.Zero();
    this.mesh.nextspeed = new Vector3.Zero();
  }

  // Textures, effects
  createMedium() {
    this.createLow();
  }

  // Head, body, hands
  createHigh() {
    this.createLow();
    this.createMedium();
  }

  // Face?
  createBest() {
    this.createLow();
    this.createMedium();
    this.createHigh();
  }
}
