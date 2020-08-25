const { Vector3, Axis } = BABYLON;

export class Controls {
  constructor(scene) {
    this.scene = scene;
  }

  // Shamelessly adapted from:
  // https://playground.babylonjs.com/#4NUAEA
  attachToMesh(mesh) {
    const v = 0.1; // mesh speed
    const bounds = 30.0; // mesh max distance

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
      mesh.nextspeed.x = 0.0;
      mesh.nextspeed.z = 0.0;

      // left
      if (keyisdown[37]) {
        mesh.nextspeed.x = 0;
        mesh.nextspeed.z = v;
      }
      // right
      if (keyisdown[39]) {
        mesh.nextspeed.x = 0;
        mesh.nextspeed.z = -v;
      }
      // up
      if (keyisdown[38]) {
        mesh.nextspeed.x = v;
        mesh.nextspeed.z = 0;
      }
      // down
      if (keyisdown[40]) {
        mesh.nextspeed.x = -v;
        mesh.nextspeed.z = 0;
      }

      mesh.speed = new Vector3.Lerp(mesh.speed, mesh.nextspeed, 0.1);

      // Turn to direction
      if (mesh.speed.length() > 0.001) {
        tempv.copyFrom(mesh.speed);

        const dot = Vector3.Dot(tempv.normalize(), Axis.Z);
        let al = Math.acos(dot);
        if (tempv.x < 0.0) {
          al = Math.PI * 2.0 - al;
        }
        let t;
        if (al > mesh.rotation.y) {
          t = Math.PI / 30;
        } else {
          t = -Math.PI / 30;
        }
        const ad = Math.abs(mesh.rotation.y - al);
        if (ad > Math.PI) {
          t = -t;
        }
        if (ad < Math.PI / 60) {
          t = 0;
        }
        mesh.rotation.y += t;
        if (mesh.rotation.y > Math.PI * 2) {
          mesh.rotation.y -= Math.PI * 2;
        }
        if (mesh.rotation.y < 0) {
          mesh.rotation.y += Math.PI * 2;
        }
      }

      // TODO Add mesh tilt in direction of movement

      mesh.moveWithCollisions(mesh.speed);

      if (mesh.position.x > bounds) {
        mesh.position.x = bounds;
      } else if (mesh.position.x < 0 - bounds) {
        mesh.position.x = 0 - bounds;
      }
      if (mesh.position.z > bounds) {
        mesh.position.z = bounds;
      } else if (mesh.position.z < 0 - bounds) {
        mesh.position.z = 0 - bounds;
      }
    });
  }
}
