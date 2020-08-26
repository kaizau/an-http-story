const { MeshBuilder, Mesh, StandardMaterial, Color3 } = BABYLON;

// TODO Just return meshes directly?
export class Character {
  constructor() {
    this.castsShadows = true;
    this.selectable = true;
    this.movable = true;
    this.controllable = true;
    this.mainCharacter = true;

    const body = MeshBuilder.CreatePolyhedron("character", {
      type: 0,
      size: 0.1,
    });
    body.rotation.x = Math.PI / 8;
    body.rotation.z = Math.PI / -6;
    body.bakeCurrentTransformIntoVertices();
    body.rotation.y = Math.PI / 3;
    body.scaling.y = 2.5;
    body.bakeCurrentTransformIntoVertices();

    const head = MeshBuilder.CreatePolyhedron("head", {
      type: 0,
      size: 0.1,
    });
    head.parent = body;
    head.position.y = 0.5;
    head.rotation.x = Math.PI / 2;
    head.rotation.y = Math.PI / 2;

    this.mesh = body;
    this.mesh = Mesh.MergeMeshes([body, head], true);
    this.mesh.checkCollisions = true;
    // this.mesh.applyGravity = true; // TODO Necessary?
    // this.mesh.ellipsoid = new Vector3(0.9, 0.45, 0.9); // TODO Adjust

    const material = new StandardMaterial("characterMaterial");
    material.diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.9);
    this.mesh.material = material;

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

    const material = new StandardMaterial("teleporterMaterial");
    material.diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.9);
    this.mesh.material = material;

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
