const { MeshBuilder, Mesh, Vector3, Axis } = BABYLON;

export class Character {
  constructor(scene, shadowGenerator) {
    this.scene = scene;

    // Just a head
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

    scene.addMesh(this.mesh);
    shadowGenerator.addShadowCaster(this.mesh);
  }

  // Shamelessly adapted from:
  // https://playground.babylonjs.com/#4NUAEA
  attachControlsAndCamera(camera) {
    const character = this.mesh;

    const v = 0.1; // character speed
    const bounds = 30.0; // character max distance
    const cameraDistance = 10;

    // NOTE Refactor to use ActionManager?
    // https://doc.babylonjs.com/how_to/how_to_use_actions
    const keyisdown = {};
    window.addEventListener("keydown", (event) => {
      keyisdown[event.keyCode] = true;
    });

    window.addEventListener("keyup", (event) => {
      keyisdown[event.keyCode] = false;
    });

    const tempv = new Vector3.Zero();

    this.scene.registerBeforeRender(() => {
      character.nextspeed.x = 0.0;
      character.nextspeed.z = 0.0;

      // left
      if (keyisdown[37]) {
        character.nextspeed.x = 0;
        character.nextspeed.z = v;
      }
      // right
      if (keyisdown[39]) {
        character.nextspeed.x = 0;
        character.nextspeed.z = -v;
      }
      // up
      if (keyisdown[38]) {
        character.nextspeed.x = v;
        character.nextspeed.z = 0;
      }
      // down
      if (keyisdown[40]) {
        character.nextspeed.x = -v;
        character.nextspeed.z = 0;
      }

      character.speed = new Vector3.Lerp(
        character.speed,
        character.nextspeed,
        0.1
      );

      // Turn to direction
      if (character.speed.length() > 0.001) {
        tempv.copyFrom(character.speed);

        const dot = Vector3.Dot(tempv.normalize(), Axis.Z);
        let al = Math.acos(dot);
        if (tempv.x < 0.0) {
          al = Math.PI * 2.0 - al;
        }
        let t;
        if (al > character.rotation.y) {
          t = Math.PI / 30;
        } else {
          t = -Math.PI / 30;
        }
        const ad = Math.abs(character.rotation.y - al);
        if (ad > Math.PI) {
          t = -t;
        }
        if (ad < Math.PI / 60) {
          t = 0;
        }
        character.rotation.y += t;
        if (character.rotation.y > Math.PI * 2) {
          character.rotation.y -= Math.PI * 2;
        }
        if (character.rotation.y < 0) {
          character.rotation.y += Math.PI * 2;
        }
      }

      // TODO Add character tilt in direction of movement

      character.moveWithCollisions(character.speed);

      if (character.position.x > bounds) {
        character.position.x = bounds;
      } else if (character.position.x < 0 - bounds) {
        character.position.x = 0 - bounds;
      }
      if (character.position.z > bounds) {
        character.position.z = bounds;
      } else if (character.position.z < 0 - bounds) {
        character.position.z = 0 - bounds;
      }

      camera.position.x = character.position.x - cameraDistance;
      camera.position.y = character.position.y + cameraDistance;
      camera.position.z = character.position.z - cameraDistance;
    });
  }
}
