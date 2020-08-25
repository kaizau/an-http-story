const { MeshBuilder, Mesh } = BABYLON;

// TODO Just return meshes directly?
export class Character {
  // TODO Better character shape via polyhedron or extrusion
  // https://www.babylonjs-playground.com/#21QRSK#15
  //
  // const body = MeshBuilder.ExtrudeShape("character", {
  //   shape: [
  //     new Vector3(0, 0, 0),
  //     new Vector3(0.1, 0.7, 0),
  //     new Vector3(0.2, 0, 0),
  //     new Vector3(0, 0, 0),
  //   ],
  //   path: [new Vector3(0, 0, 0), new Vector3(0, 0, 0.1)],
  //   sideOrientation: Mesh.DOUBLESIDE,
  //   cap: Mesh.CAP_ALL,
  //   invertUV: true,
  // });

  constructor() {
    this.castsShadows = true;
    this.selectable = true;
    this.movable = true;
    this.controllable = true;
    this.mainCharacter = true;

    const body = MeshBuilder.CreateBox("character", {
      height: 0.6,
      width: 0.25,
      depth: 0.15,
    });
    body.position.y = 0.1;

    const head = MeshBuilder.CreateBox("head", {
      height: 0.2,
      width: 0.15,
      depth: 0.1,
    });
    head.parent = body;
    head.position.y = 0.5;

    this.mesh = body;
    this.mesh = Mesh.MergeMeshes([body, head], true);
    this.mesh.checkCollisions = true;
    // this.mesh.applyGravity = true; // TODO Necessary?
    // this.mesh.ellipsoid = new Vector3(0.9, 0.45, 0.9); // TODO Adjust

    this.mesh._class = this;
  }
}

export class Teleporter {
  constructor() {
    this.selectable = true;
    this.winTrigger = true;

    this.mesh = MeshBuilder.CreateTorus("teleporter", {
      diameter: 0.8,
      thickness: 0.1,
      tessellation: 8,
    });
    this.mesh.position.y = -0.4;
    this.mesh.scaling.y = 0.75;

    this.mesh._class = this;
  }
}

// NOTE Maybe walls and floor are interchangeable?
// In either case, character movement will need to be restricted. Maybe by
// downward raycasts that detect "walkable"? Or invisible collision-detected
// walls?
export class Block {
  constructor(id) {
    this.walkable = true;

    this.mesh = MeshBuilder.CreateBox("floor-" + id, {
      height: 1,
      width: 1,
      depth: 1,
    });
    this.mesh.receiveShadows = true;

    this.mesh._class = this;
  }
}

export class BlockMovable extends Block {
  constructor(id) {
    super(id);
    this.movable = true;
    this.mesh.name = "floorMovable-" + id;
  }
}
