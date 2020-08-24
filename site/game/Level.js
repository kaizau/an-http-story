const { MeshBuilder } = BABYLON;

export class Floor {
  constructor(template) {
    this.castsShadows = false;
    this.selectable = false;
    this.movable = false;
    this.controllable = false;

    this.mesh = MeshBuilder.CreateBox("floor-" + template.id, {
      height: 0.5,
      width: 1,
      depth: 1,
    });
    this.mesh.position.y = -0.5;
    this.mesh.receiveShadows = true;
  }
}

export class FloorMovable extends Floor {
  constructor(template) {
    super(template);
    this.movable = true;
    this.mesh.name = "floorMovable-" + template.id;
  }
}

// NOTE Maybe walls and floor are interchangeable?
export class Wall {
  constructor(template) {
    this.castsShadows = true;
    this.selectable = false;
    this.movable = false;
    this.controllable = false;

    this.mesh = MeshBuilder.CreateBox("wall-" + template.id, {
      height: 1,
      width: 1,
      depth: 1,
    });
    this.mesh.receiveShadows = true;
  }
}

export class WallMovable extends Wall {
  constructor(template) {
    super(template);
    this.movable = true;
    this.mesh.name = "wallMovable-" + template.id;
  }
}
