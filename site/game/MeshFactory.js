import { TLX, TLA, TLB, TLC, TLD, TLE, TLF } from "./meshes";
import {
  MeshBuilder,
  Mesh,
  StandardMaterial,
  Color3,
  Color4,
  Vector3,
  BoundingInfo,
} from "BABYLON";

export class MeshFactory {
  constructor(state, meshMixins, shadows) {
    this._meshMixins = meshMixins;
    this._shadows = shadows;

    this._matSpecial = new StandardMaterial();
    this._matSpecial.diffuseColor = new Color3(0.6, 0.6, 1);
    this._matSpecial.freeze();

    this._matBlue = new StandardMaterial();
    this._matBlue.diffuseColor = new Color3(0.6, 0.8, 1);
    this._matBlue.freeze();

    this._matYellow = new StandardMaterial();
    this._matYellow.diffuseColor = new Color3(1, 1, 0.6);
    this._matYellow.freeze();

    this._matGreen = new StandardMaterial();
    this._matGreen.diffuseColor = new Color3(0.7, 1, 0.7);
    this._matGreen.freeze();

    this._matRed = new StandardMaterial();
    this._matRed.diffuseColor = new Color3(1, 0.7, 0.7);
    this._matRed.freeze();

    this._matGray = new StandardMaterial();
    this._matGray.diffuseColor = new Color3(0.5, 0.5, 0.5);
    this._matGray.freeze();

    this._matBlack = new StandardMaterial();
    this._matBlack.diffuseColor = new Color3(0.3, 0.3, 0.3);
    this._matBlack.freeze();

    this._matEye = new StandardMaterial();
    this._matEye.diffuseColor = Color3.White();
    this._matEye.emissiveColor = Color3.Gray();
    this._matEye.freeze();

    this._createBlockTemplate();
  }

  _createBlockTemplate() {
    // Default blocks are exactly the size we need, but the options object is
    // required
    const mesh = MeshBuilder.CreateBox(0, {});
    mesh.receiveShadows = true;
    mesh.material = new StandardMaterial();
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
    this._meshMixins.$makeWalkable(this.blockDouble);
    this._meshMixins.$makeInstanceDouble(this.blockDouble);
  }

  $createBlock() {
    const mesh = this.blockTemplate.createInstance();
    mesh.blockDouble = this.blockDouble;
    this._shadows.addShadowCaster(mesh);
    this._meshMixins.$makeHoverable(mesh);
    this._meshMixins.$makeWalkable(mesh);
    return mesh;
  }

  $createBlockMovable() {
    const mesh = MeshBuilder.CreateBox(0, {});
    mesh.receiveShadows = true;

    // Smaller bounding box for movable blocks to allow fitting into tight spaces.
    // Also reduces pickable / draggable area, so an alternative might be to create
    // an invisible internal box for collisions.
    // const min = mesh.getBoundingInfo().boundingBox.minimum;
    // const max = mesh.getBoundingInfo().boundingBox.maximum;
    // const adjustment = new Vector3(0.15, 0.15, 0.15);
    // min.addInPlace(adjustment);
    // max.subtractInPlace(adjustment);
    // mesh.setBoundingInfo(new BoundingInfo(min, max));

    mesh.material = this._matBlue;

    this._shadows.addShadowCaster(mesh);
    this._meshMixins.$makeHoverable(mesh);
    this._meshMixins.$makeWalkable(mesh);
    this._meshMixins.$makeDraggable(mesh);
    return mesh;
  }

  $createEye(seeker) {
    const faceColors = new Array(26);
    if (seeker) {
      for (let i = 0; i < 26; i++) {
        faceColors[i] =
          i === 24 ? new Color4(1, 1, 1, 1) : new Color4(0.75, 0, 0, 1);
      }
    } else {
      faceColors[24] = new Color4(1, 0, 0, 1);
    }
    const mesh = MeshBuilder.CreatePolyhedron(0, {
      type: 4,
      size: 0.25,
      faceColors,
    });
    mesh.rotation.x = Math.PI / -9;
    mesh.rotation.y = Math.PI / -9;
    mesh.rotation.z = Math.PI / 18;
    mesh.bakeCurrentTransformIntoVertices();
    mesh.material = this._matEye;
    mesh.isPickable = false;

    this._shadows.addShadowCaster(mesh);
    this._meshMixins.$makeEnemy(mesh);
    if (seeker) {
      this._meshMixins.$makeSeeking(mesh);
    } else {
      this._meshMixins.$makePatrolling(mesh);
    }
    return mesh;
  }

  $createCharacter() {
    const body = MeshBuilder.CreatePolyhedron(0, {
      type: 0,
      size: 0.1,
    });
    body.rotation.x = Math.PI / 9;
    body.rotation.z = Math.PI / -6;
    body.bakeCurrentTransformIntoVertices();
    body.rotation.y = Math.PI / 3;
    body.scaling.y = 2.5;
    body.position.y = -0.1;
    body.bakeCurrentTransformIntoVertices();

    const head = MeshBuilder.CreatePolyhedron(0, {
      type: 0,
      size: 0.06,
    });
    head.parent = body;
    head.position.y = 0.4;
    head.rotation.x = Math.PI / 2;
    head.rotation.y = Math.PI / 2;

    const mesh = Mesh.MergeMeshes([body, head], true);
    mesh.material = this._matSpecial;
    mesh.isPickable = false;

    // TODO subtle bobbing up and down animation
    this._shadows.addShadowCaster(mesh);
    this._meshMixins.$makeMainCharacter(mesh);
    return mesh;
  }

  $createTeleporter(id) {
    const mesh = MeshBuilder.CreateTorus("t-" + id, {
      diameter: 0.8,
      thickness: 0.1,
      tessellation: 8,
    });
    mesh.position.y = -0.4;
    mesh.scaling.y = 0.75;
    mesh.bakeCurrentTransformIntoVertices();

    const bounds = new BoundingInfo(
      new Vector3(0.2, 0.4, 0.2),
      new Vector3(-0.2, -0.4, -0.2)
    );
    mesh.setBoundingInfo(bounds);

    switch (id) {
      case TLX:
        mesh.material = this._matSpecial;
        break;
      case TLA:
        mesh.material = this._matYellow;
        break;
      case TLB:
        mesh.material = this._matGreen;
        break;
      case TLC:
        mesh.material = this._matRed;
        break;
      case TLD:
        mesh.material = this._matBlue;
        break;
      case TLE:
        mesh.material = this._matGray;
        break;
      case TLF:
        mesh.material = this._matBlack;
        break;
    }

    mesh.isPickable = false;
    this._meshMixins.$makeTeleporter(mesh, id);
    return mesh;
  }
}
