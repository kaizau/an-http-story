import { TLX, TLA, TLB, TLC, TLD } from "./levels";
const {
  MeshBuilder,
  Mesh,
  StandardMaterial,
  Color3,
  Color4,
  Vector3,
  BoundingInfo,
} = BABYLON;

export class MeshFactory {
  constructor(scene, state, meshMixins, shadows) {
    this.scene = scene;
    this.meshMixins = meshMixins;
    this.shadows = shadows;

    this.blockTemplate = {};

    this.matSpecial = new StandardMaterial("matSpecial");
    this.matSpecial.diffuseColor = new Color3(0.6, 0.6, 1);
    this.matSpecial.freeze();

    this.matBlue = new StandardMaterial("matBlue");
    this.matBlue.diffuseColor = new Color3(0.6, 0.8, 1);
    this.matBlue.freeze();

    this.matYellow = new StandardMaterial("matYellow");
    this.matYellow.diffuseColor = new Color3(1, 1, 0.6);
    this.matYellow.freeze();

    this.matGreen = new StandardMaterial("matGreen");
    this.matGreen.diffuseColor = new Color3(0.7, 1, 0.7);
    this.matGreen.freeze();

    this.matRed = new StandardMaterial("matRed");
    this.matRed.diffuseColor = new Color3(1, 0.7, 0.7);
    this.matRed.freeze();

    this.matEye = new StandardMaterial("matEye");
    this.matEye.diffuseColor = Color3.White();
    this.matEye.emissiveColor = Color3.Gray();
    this.matEye.freeze();

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
    mesh.material.diffuseColor = new Color3(0.8, 0.8, 0.8);
    mesh.isVisible = false;
    mesh.position = new Vector3(0, -5, 0);

    // Supposedly good for perf
    mesh.convertToUnIndexedMesh();

    this.blockTemplate = mesh;

    // Instanced meshes cannot receive outlines, overlays, highlights. So
    // instead, create a clone, then swap in the clone when needed.
    this.blockDouble = mesh.clone();
    this.blockDouble.overlayColor = Color3.White();
    this.blockDouble.renderOverlay = true;
    this.meshMixins.makeWalkable(this.blockDouble);
    this.meshMixins.makeInstanceDouble(this.blockDouble);
  }

  createBlock() {
    const mesh = this.blockTemplate.createInstance();
    mesh.blockDouble = this.blockDouble;
    this.shadows.addShadowCaster(mesh);
    this.meshMixins.makeHoverable(mesh);
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
    mesh.material = this.matBlue;

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
    this.meshMixins.makeHoverable(mesh);
    this.meshMixins.makeWalkable(mesh);
    this.meshMixins.makeDraggable(mesh);
    return mesh;
  }

  createEye(seeker) {
    const faceColors = new Array(26);
    if (seeker) {
      for (let i = 0; i < 26; i++) {
        faceColors[i] =
          i === 24 ? new Color4(1, 1, 1, 1) : new Color4(0.75, 0, 0, 1);
      }
    } else {
      faceColors[24] = new Color4(1, 0, 0, 1);
    }
    const mesh = MeshBuilder.CreatePolyhedron("eyeball", {
      type: 4,
      size: 0.25,
      faceColors,
    });
    mesh.material = this.matEye;
    mesh.rotation.x = Math.PI / -9;
    mesh.rotation.y = Math.PI / -9;
    mesh.rotation.z = Math.PI / 18;
    mesh.bakeCurrentTransformIntoVertices();

    this.shadows.addShadowCaster(mesh);
    this.meshMixins.makeEnemy(mesh);
    if (seeker) {
      this.meshMixins.makeSeeking(mesh);
    } else {
      this.meshMixins.makePatrolling(mesh);
    }
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
    mesh.material = this.matSpecial;

    // Larger bounding box to prevent getting "squashed" by movable block
    const max = new Vector3(0.3, 0.4, 0.3);
    const min = new Vector3(-0.3, -0.4, -0.3);
    mesh.setBoundingInfo(new BoundingInfo(min, max));

    // TODO subtle bobbing up and down animation
    this.shadows.addShadowCaster(mesh);
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

    switch (id) {
      case TLX:
        mesh.material = this.matSpecial;
        break;
      case TLA:
        mesh.material = this.matYellow;
        break;
      case TLB:
        mesh.material = this.matGreen;
        break;
      case TLC:
        mesh.material = this.matRed;
        break;
      case TLD:
        mesh.material = this.matBlue;
        break;
    }

    // Taller bounding box to allow intersect with player character
    const min = new Vector3(-0.4, -0.4, -0.4);
    const max = new Vector3(0.4, 0.4, 0.4);
    mesh.setBoundingInfo(new BoundingInfo(min, max));

    this.meshMixins.makeTeleporter(mesh, id);
    return mesh;
  }
}
