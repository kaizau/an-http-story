import { TLX } from "./levels";
const {
  MeshBuilder,
  Mesh,
  StandardMaterial,
  Color3,
  Color4,
  Vector3,
  BoundingInfo,
} = window.BABYLON;

export class MeshFactory {
  constructor(scene, state, meshMixins, shadows) {
    this.scene = scene;
    this.meshMixins = meshMixins;
    this.shadows = shadows;

    this.primaryMaterial = new StandardMaterial("primaryMaterial");
    this.primaryMaterial.diffuseColor = new Color3(0.6, 0.6, 1);
    this.primaryMaterial.freeze();

    this.secondaryMaterial = new StandardMaterial("secondaryMaterial");
    this.secondaryMaterial.diffuseColor = new Color3(0.6, 0.8, 0.9);
    this.secondaryMaterial.freeze();

    this.createBlockTemplate();
  }

  createBlockTemplate() {
    const mesh = MeshBuilder.CreateBox("block", {
      height: 1,
      width: 1,
      depth: 1,
    });
    mesh.receiveShadows = true;
    mesh.material = new StandardMaterial("blockMaterial");
    mesh.material.diffuseColor = new Color3(0.9, 0.9, 0.9);
    mesh.isVisible = false;

    // Supposedly good for perf
    // mesh.convertToUnIndexedMesh();

    this.blockTemplate = mesh;
  }

  createBlock() {
    const mesh = this.blockTemplate.createInstance();
    this.shadows.addShadowCaster(mesh);
    this.meshMixins.makeWalkable(mesh);
    return mesh;
  }

  createBlockMovable() {
    const mesh = MeshBuilder.CreateBox("blockMovable", {
      height: 1,
      width: 1,
      depth: 1,
    });
    mesh.receiveShadows = true;
    mesh.material = this.secondaryMaterial;

    // Smaller bounding box to allow fitting into tight spaces.
    //
    // TODO Also reduces draggable area, so a better alternative might be to
    // create a smaller internal box for collisions.
    const min = mesh.getBoundingInfo().boundingBox.minimum;
    const max = mesh.getBoundingInfo().boundingBox.maximum;
    const adjustment = new Vector3(0.15, 0.15, 0.15);
    min.addInPlace(adjustment);
    max.subtractInPlace(adjustment);
    mesh.setBoundingInfo(new BoundingInfo(min, max));

    this.shadows.addShadowCaster(mesh);
    this.meshMixins.makeWalkable(mesh);
    this.meshMixins.makeDraggable(mesh);
    return mesh;
  }

  createEye() {
    const faceColors = new Array(26);
    faceColors[24] = new Color4(1, 0, 0, 1);
    const mesh = MeshBuilder.CreatePolyhedron("eyeball", {
      type: 4,
      size: 0.25,
      faceColors,
    });
    mesh.rotation.x = Math.PI / -9;
    mesh.rotation.y = Math.PI / -9;
    mesh.rotation.z = Math.PI / 18;
    mesh.bakeCurrentTransformIntoVertices();

    this.shadows.addShadowCaster(mesh);
    this.meshMixins.makeEnemy(mesh);
    this.meshMixins.makePatrolling(mesh);
    return mesh;
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
    mesh.material = this.primaryMaterial;

    // Larger bounding box to prevent getting "squashed" by movable block
    const min = new Vector3(-0.25, -0.25, -0.25);
    const max = new Vector3(0.25, 0.5, 0.25);
    mesh.setBoundingInfo(new BoundingInfo(min, max));

    // TODO subtle bobbing up and down animation
    this.shadows.addShadowCaster(mesh);
    this.meshMixins.makeSelectable(mesh);
    this.meshMixins.makeControllable(mesh);
    this.meshMixins.makeMainCharacter(mesh);
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
    mesh.bakeCurrentTransformIntoVertices();

    mesh.material = id === TLX ? this.primaryMaterial : this.secondaryMaterial;

    // Taller bounding box to allow intersect with player character
    const min = new Vector3(0, 0, 0);
    const max = new Vector3(0.5, 0.5, 0.5);
    mesh.setBoundingInfo(new BoundingInfo(min, max));

    this.meshMixins.makeTeleporter(mesh, id);
    return mesh;
  }
}
