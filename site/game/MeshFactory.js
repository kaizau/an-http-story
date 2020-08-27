const { MeshBuilder, Mesh, StandardMaterial, Color3 } = BABYLON;

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
    mesh.checkCollisions = true;
    mesh.outlineColor = new Color3(0, 1, 1);

    const material = new StandardMaterial("characterMaterial");
    material.diffuseColor = new Color3(0.6, 0.6, 0.9);
    mesh.material = material;

    this.shadows.addShadowCaster(mesh);
    this.actionFactory.makeControllable(mesh);
    this.actionFactory.makeSelectable(mesh);
    return mesh;
  }

  createTeleporter() {
    const mesh = MeshBuilder.CreateTorus("teleporter", {
      diameter: 0.8,
      thickness: 0.1,
      tessellation: 8,
    });
    mesh.position.y = -0.4;
    mesh.scaling.y = 0.75;
    mesh.outlineColor = new Color3(0, 1, 1);

    const material = new StandardMaterial("teleporterMaterial");
    material.diffuseColor = new Color3(0.6, 0.6, 0.9);
    mesh.material = material;

    this.actionFactory.makeSelectable(mesh);
    return mesh;
  }

  createBlock(id) {
    const mesh = MeshBuilder.CreateBox("block-" + id, {
      height: 1,
      width: 1,
      depth: 1,
    });
    mesh.receiveShadows = true;

    this.actionFactory.makeWalkable(mesh);
    return mesh;
  }

  createBlockMovable(id) {
    const mesh = MeshBuilder.CreateBox("blockMovable-" + id, {
      height: 1,
      width: 1,
      depth: 1,
    });
    mesh.receiveShadows = true;

    this.actionFactory.makeWalkable(mesh);
    this.actionFactory.makeSelectable(mesh);
    return mesh;
  }
}
