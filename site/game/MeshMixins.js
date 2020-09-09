import { delay, events } from "./utils";
import { TLX } from "./meshes";
import {
  ActionManager,
  ExecuteCodeAction,
  PointerDragBehavior,
  Color3,
  Vector3,
  Ray,
} from "BABYLON";
const {
  OnPickTrigger,
  OnPointerOverTrigger,
  OnPointerOutTrigger,
  OnIntersectionEnterTrigger,
} = ActionManager;

const primaryOutline = new Color3(0, 1, 1);
const errorOutline = new Color3(1, 1, 0);

// TODO Are action managers automatically disposed when meshes are disposed?
export class MeshMixins {
  constructor(scene, state, animationMixins) {
    this._scene = scene;
    this._state = state;
    this._animationMixins = animationMixins;
  }

  $makeWalkable(mesh) {
    this._ensureActionManager(mesh);
    mesh.isWalkable = true;

    mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPickTrigger, () => {
        if (!this._state.$playerControl || this._state.$drag === mesh) return;

        const main = this._state.$mainCharacter;
        if (main) {
          const target = mesh.position.clone();
          target.y = main.position.y;
          this._animationMixins.$walkTo(main, target);
        }
      })
    );
  }

  $makeDraggable(mesh) {
    mesh.outlineColor = primaryOutline;
    const pointerDragBehavior = new PointerDragBehavior({
      dragPlaneNormal: new Vector3(0, 1, 0),
    });
    pointerDragBehavior.moveAttached = false;
    pointerDragBehavior.onDragStartObservable.add(async () => {
      if (!this._state.$playerControl || this._hasCharacterOnTop(mesh)) {
        mesh.outlineColor = errorOutline;
        mesh.renderOutline = true;
        return;
      }

      // Slight delay to accommodate oversensitive VR controllers
      this._state.$dragStart = true;
      await delay(150);
      if (this._state.$dragStart) {
        mesh.renderOutline = true;
        mesh.renderOverlay = false;
        this._state.$drag = mesh;
        this._state.$dragLastSafePosition = mesh.position.clone();
      }
    });
    pointerDragBehavior.onDragObservable.add((event) => {
      if (!this._state.$drag || !this._state.$playerControl) {
        return;
      }

      mesh.renderOutline = true;
      mesh.position.x += event.delta.x;
      mesh.position.z += event.delta.z;
      // NOTE Hard-stopping drag collisions would be better, if it didn't make
      // controls annoyingly difficult. So allow "ghosting", but reset to
      // non-intersecting position on end.
      //
      // mesh.computeWorldMatrix();
      if (this._hasAnyCollision(mesh)) {
        mesh.outlineColor = errorOutline;
        // mesh.position.x -= event.delta.x;
        // mesh.position.z -= event.delta.z;
        // mesh.computeWorldMatrix();
      } else {
        mesh.outlineColor = primaryOutline;
        // NOTE In rare instances, mesh.position could be set to a number that
        // did not round to safe, causing meshes to overlap. Compensating by
        // saving the pre-delta position instead.
        const safe = mesh.position.clone();
        safe.x -= event.delta.x;
        safe.z -= event.delta.z;
        this._state.$dragLastSafePosition = safe;
      }
    });
    pointerDragBehavior.onDragEndObservable.add(() => {
      let snap;
      if (this._hasAnyCollision(mesh)) {
        snap = this._state.$dragLastSafePosition;
      } else {
        snap = mesh.position.clone();
      }
      snap.x = Math.round(snap.x);
      snap.z = Math.round(snap.z);
      this._animationMixins.$floatTo(mesh, snap);
      this._state.$drag = null;
      this._state.$dragStart = false;
      this._state.$dragLastSafePosition = null;

      mesh.outlineColor = primaryOutline;
      mesh.renderOutline = false;
    });
    mesh.addBehavior(pointerDragBehavior);
  }

  $makeMainCharacter(mesh) {
    this._state.$mainCharacter = mesh;
  }

  $makeTeleporter(mesh, id) {
    this._ensureActionManager(mesh);
    mesh.isTeleporter = true;
    this._state.$teleporters.push(mesh);

    events.one("levelReady", () => {
      const main = this._state.$mainCharacter;

      mesh.actionManager.registerAction(
        new ExecuteCodeAction(
          {
            trigger: OnIntersectionEnterTrigger,
            parameter: main,
          },
          async () => {
            if (id === TLX) {
              if (mesh.teleporterActivated) return;
              mesh.teleporterActivated = true;
              events.emit("levelCompleted");
            } else {
              const paired = this._state.$teleporters.find((otherMesh) => {
                return mesh !== otherMesh && otherMesh.name === "t-" + id;
              });

              // Arriving
              if (mesh.teleporterActivated) {
                mesh.teleporterActivated = false;
                paired.teleporterActivated = false;
                return;
              }

              // Departing
              mesh.teleporterActivated = true;
              paired.teleporterActivated = true;

              await delay(500); // Allow character to reach center
              this._scene.stopAnimation(main);
              this._animationMixins.$exitScene(main, () => {
                const yTarget = paired.position.y;
                main.position.x = paired.position.x;
                main.position.y = paired.position.y + 10;
                main.position.z = paired.position.z;
                this._animationMixins.$enterScene(main, yTarget);
              });
            }
          }
        )
      );
    });
  }

  $makeEnemy(mesh) {
    this._ensureActionManager(mesh);
    mesh.isEnemy = true;

    events.one("levelReady", () => {
      mesh.actionManager.registerAction(
        new ExecuteCodeAction(
          {
            trigger: OnIntersectionEnterTrigger,
            parameter: this._state.$mainCharacter,
          },
          () => {
            if (!this._state.$playerControl) return;
            this._state.$playerControl = false;
            this._animationMixins.$swallowedByEye(
              mesh,
              this._state.$mainCharacter,
              async () => {
                await delay(500);
                events.emit("levelLost");
              }
            );
          }
        )
      );
    });
  }

  $makePatrolling(mesh) {
    mesh.isPatrolling = true;

    events.one("levelReady", () => {
      const y = mesh.position.y;
      const path = this._state.$eyePatrolPath[y];
      if (path) {
        this._animationMixins.$patrolPath(mesh, path);
      }
    });
  }

  $makeSeeking(mesh) {
    this._state.$seekers.push(mesh);
    events.one("levelReady", async () => {
      await delay(2000); // Give the player a bit of breathing room
      this._ensureSeekerTimer();
    });
  }

  $makeInstanceDouble(mesh) {
    this._ensureActionManager(mesh);
    mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPointerOutTrigger, () => {
        if (mesh.onInstancePointerOut) {
          mesh.onInstancePointerOut();
        }
      })
    );
  }

  $makeHoverable(mesh) {
    this._ensureActionManager(mesh);
    mesh.overlayColor = Color3.White();

    mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPointerOverTrigger, () => {
        if (this._state.$drag) return;

        if (mesh.isAnInstance) {
          const double = mesh.blockDouble;

          // It's possible to rapidly pointerOver another mesh before
          // pointerOut fires on the current, which leads to disappearing
          // blocks. So, call this preemptively.
          if (double.onInstancePointerOut) {
            double.onInstancePointerOut();
          }

          double.position = mesh.position;
          double.isVisible = true;
          mesh.isVisible = false;
          double.onInstancePointerOut = () => {
            double.isVisible = false;
            mesh.isVisible = true;
          };
        } else {
          mesh.renderOverlay = true;
        }
      })
    );

    mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPointerOutTrigger, () => {
        if (!mesh.isAnInstance) {
          mesh.renderOverlay = false;
        }
      })
    );
  }

  _ensureActionManager(mesh) {
    mesh.actionManager = mesh.actionManager || new ActionManager(this._scene);
  }

  // Each tick, move 1 step towards player.
  _ensureSeekerTimer() {
    this._state.$seekerTimer =
      this._state.$seekerTimer ||
      setInterval(() => {
        if (!this._state.$playerControl) return;
        const main = this._state.$mainCharacter;
        this._state.$seekers.forEach((seeker) => {
          const next = seeker.position.clone();

          let xDiff = Math.round(main.position.x - next.x);
          xDiff = xDiff > 0 ? Math.min(xDiff, 1) : Math.max(xDiff, -1);
          if (Math.abs(xDiff) > 0 && this._noSeekerIntent(next, { x: xDiff })) {
            next.x += xDiff;
          }

          let zDiff = Math.round(main.position.z - next.z);
          zDiff = zDiff > 0 ? Math.min(zDiff, 1) : Math.max(zDiff, -1);
          if (Math.abs(zDiff) > 0 && this._noSeekerIntent(next, { z: zDiff })) {
            next.z += zDiff;
          }

          seeker.nextPosition = next;
          this._animationMixins.$rotateTo(seeker, main.position);
          this._animationMixins.$floatTo(seeker, next);
        });
      }, 2000);
  }

  // Used to avoid clustering. Unlike walk logic that calculates present
  // collisions, this needs to know whether there will be a FUTURE collision.
  // So seekers need to publish their movement intent.
  _noSeekerIntent(current, { x = 0, z = 0 }) {
    const destination = current.clone();
    destination.x += x;
    destination.z += z;
    const occupied = this._state.$seekers
      .map((s) => s.nextPosition)
      .some((p) => p && p.equals(destination));
    return !occupied;
  }

  _hasCharacterOnTop(mesh) {
    const start = mesh.position.clone();
    start.y += 0.5;
    const top = new Ray(start, new Vector3(0, 1, 0), 1);
    const topPick = this._scene.pickWithRay(
      top,
      (mesh) => mesh === this._state.$mainCharacter
    );
    return topPick.hit;
  }

  _hasAnyCollision(mesh) {
    // Only test with meshes in camera view, on same plane
    const active = this._scene.getActiveMeshes().data;
    const samePlane = active.filter((otherMesh) => {
      return (
        mesh.position.y === otherMesh.position.y &&
        otherMesh !== mesh &&
        otherMesh.id !== "BackgroundHelper" &&
        otherMesh.id !== "BackgroundPlane" &&
        otherMesh.id !== "BackgroundSkybox"
      );
    });
    return samePlane.some((otherMesh) => mesh.intersectsMesh(otherMesh));
  }
}
