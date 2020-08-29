const {
  MeshBuilder,
  Mesh,
  StandardMaterial,
  Color3,
  Vector3,
  BoundingInfo,
} = BABYLON;

export class MeshFactory {
  constructor(scene, state, actionFactory, shadows) {
    this.scene = scene;
    this.state = state;
    this.actionFactory = actionFactory;
    this.shadows = shadows;
  }

  createCharacter() {
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
      size: 0.06,
    });
    head.parent = body;
    head.position.y = 0.5;
    head.rotation.x = Math.PI / 2;
    head.rotation.y = Math.PI / 2;

    const mesh = Mesh.MergeMeshes([body, head], true);

    const material = new StandardMaterial("characterMaterial");
    material.diffuseColor = new Color3(0.6, 0.6, 0.9);
    mesh.material = material;

    // TODO subtle bobbing up and down animation
    this.shadows.addShadowCaster(mesh);
    this.actionFactory.makeSelectable(mesh);
    this.actionFactory.makeControllable(mesh);
    this.actionFactory.makeMainCharacter(mesh);
    return mesh;
  }

  createTeleporter(id) {
    const mesh = MeshBuilder.CreateTorus("teleporter-" + id, {
      diameter: 0.8,
      thickness: 0.1,
      tessellation: 8,
    });
    mesh.position.y = -0.4;
    mesh.scaling.y = 0.75;

    const material = new StandardMaterial("teleporterMaterial");
    material.diffuseColor = new Color3(0.6, 0.6, 0.9);
    mesh.material = material;

    // Larger bounding box
    const min = new Vector3(0, 0, 0);
    const max = new Vector3(0.5, 0.5, 0.5);
    mesh.setBoundingInfo(new BoundingInfo(min, max));

    this.actionFactory.makeSelectable(mesh);
    this.actionFactory.makeTeleporter(mesh, id);
    return mesh;
  }

  createBlock() {
    const mesh = MeshBuilder.CreateBox("block", {
      height: 1,
      width: 1,
      depth: 1,
    });
    mesh.receiveShadows = true;

    this.actionFactory.makeWalkable(mesh);
    return mesh;
  }

  createBlockMovable() {
    const mesh = MeshBuilder.CreateBox("blockMovable", {
      height: 1,
      width: 1,
      depth: 1,
    });
    mesh.receiveShadows = true;

    // Smaller bounding box to allow fitting into tight spaces
    const min = mesh.getBoundingInfo().boundingBox.minimum;
    const max = mesh.getBoundingInfo().boundingBox.maximum;
    const adjustment = new Vector3(0.15, 0.15, 0.15);
    min.addInPlace(adjustment);
    max.subtractInPlace(adjustment);
    mesh.setBoundingInfo(new BoundingInfo(min, max));

    this.actionFactory.makeWalkable(mesh);
    this.actionFactory.makeDraggable(mesh);
    return mesh;
  }
}
