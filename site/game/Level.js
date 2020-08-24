const { MeshBuilder } = BABYLON;

export class Floor {
  constructor(id) {
    this.castsShadows = false;
    this.selectable = false;
    this.movable = false;
    this.controllable = false;

    this.mesh = MeshBuilder.CreateBox("floor-" + id, {
      height: 1,
      width: 1,
      depth: 1,
    });
    this.mesh.receiveShadows = true;
  }
}

export class FloorMovable extends Floor {
  constructor(id) {
    super(id);
    this.movable = true;
    this.mesh.name = "floorMovable-" + id;
  }
}

// NOTE Maybe walls and floor are interchangeable?
export class Wall {
  constructor(id) {
    this.castsShadows = true;
    this.selectable = false;
    this.movable = false;
    this.controllable = false;

    this.mesh = MeshBuilder.CreateBox("wall-" + id, {
      height: 1,
      width: 1,
      depth: 1,
    });
    this.mesh.receiveShadows = true;
  }
}

export class WallMovable extends Wall {
  constructor(id) {
    super(id);
    this.movable = true;
    this.mesh.name = "wallMovable-" + id;
  }
}

export class Teleporter {
  constructor(id) {
    this.castsShadows = false;
    this.selectable = true;
    this.movable = false;
    this.controllable = false;

    this.mesh = MeshBuilder.CreateTorus("teleporter-" + id, {
      diameter: 0.8,
      thickness: 0.1,
      tessellation: 8,
    });
    this.mesh.position.y = -0.4;
    this.mesh.scaling.y = 0.75;
  }
}
