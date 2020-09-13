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

export class MeshMixins {
  constructor(scene, state, animationMixins, shadows) {
    this._scene = scene;
    this._state = state;
    this._state.$dragging = [];
    this._animationMixins = animationMixins;
    this._shadows = shadows;
  }

  $makeWalkable(mesh) {
    this._ensureActionManager(mesh);
    mesh.isWalkable = true;

    mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPickTrigger, () => {
        if (!this._state.$playerControl || this._state.$dragging.length) return;

        const main = this._state.$mainCharacter;
        if (main) {
          const target = mesh.position.clone();
          target.y = main.position.y;
          this._animationMixins.$walkTo(main, target);
        }
      })
    );
  }

  // Hard-stopping drag collisions would be nice, but it makes controls more
  // difficult. So allow "ghosting", but snap to a non-colliding position on
  // dragend.
  $makeDraggable(mesh) {
    mesh.outlineColor = primaryOutline;
    const pointerDragBehavior = new PointerDragBehavior({
      dragPlaneNormal: new Vector3(0, 1, 0),
    });
    pointerDragBehavior.updateDragPlane = false;

    pointerDragBehavior.moveAttached = false;

    pointerDragBehavior.onDragStartObservable.add(async () => {
      if (this._hasCharacterOnTop(mesh)) {
        mesh.outlineColor = errorOutline;
        mesh.renderOutline = true;
        return;
      }

      // Slight delay on dragstart to accommodate oversensitive VR controller
      // trigger. Prevents pick from getting overridden by dragstart. If
      // trigger released before delay, then the event is ignored.
      this._state.$dragStart = mesh.position.clone();
      await delay(200);
      if (this._state.$dragStart) {
        mesh.renderOutline = true;
        mesh.renderOverlay = false;
        pointerDragBehavior.moveAttached = true;
        this._state.$dragging.push(mesh);
        this._state.$dragStart.x = Math.round(this._state.$dragStart.x);
        this._state.$dragStart.y = Math.round(this._state.$dragStart.y);
        this._state.$dragStart.z = Math.round(this._state.$dragStart.z);
      }
    });

    pointerDragBehavior.onDragObservable.add(() => {
      if (!this._state.$dragging.includes(mesh)) return;

      // mesh.position.x += event.delta.x;
      // mesh.position.z += event.delta.z;
      // mesh.computeWorldMatrix();
      if (this._hasAnyCollision(mesh)) {
        mesh.outlineColor = errorOutline;
        // mesh.position.x -= event.delta.x;
        // mesh.position.z -= event.delta.z;
        // mesh.computeWorldMatrix();
      } else {
        mesh.outlineColor = primaryOutline;
        // In rare instances, mesh.position can be set to a number that does
        // not round to safe, causing meshes to overlap. Compensating by saving
        // the pre-delta position instead.
        // const safe = mesh.position.clone();
        // safe.x -= event.delta.x;
        // safe.z -= event.delta.z;
        // this._state.$dragLastSafePosition = safe;
      }
    });

    pointerDragBehavior.onDragEndObservable.add(() => {
      if (this._state.$dragging.includes(mesh)) {
        const snap = this._getSafePosition(mesh) || this._state.$dragStart;
        this._animationMixins.$floatTo(mesh, snap);
      }

      this._state.$dragStart = null;
      mesh.outlineColor = primaryOutline;
      mesh.renderOutline = false;
      pointerDragBehavior.moveAttached = false;

      const index = this._state.$dragging.indexOf(mesh);
      this._state.$dragging.splice(index, 1);
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

    events.one("ready", () => {
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
              events.emit("completed");
            } else {
              const paired = this._state.$teleporters.find((otherMesh) => {
                return mesh !== otherMesh && otherMesh.name === "t-" + id;
              });

              // Arriving
              if (mesh.teleporterActivated) {
                this._state.$playerControl = true;
                mesh.teleporterActivated = false;
                paired.teleporterActivated = false;
                return;
              }

              // Departing
              this._state.$playerControl = false;
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

    events.one("ready", () => {
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
                events.emit("lost");
              }
            );
          }
        )
      );
    });
  }

  $makePatrolling(mesh) {
    mesh.isPatrolling = true;

    events.one("ready", () => {
      const y = mesh.position.y;
      const path = this._state.$eyePatrolPath[y];
      if (path) {
        this._animationMixins.$patrolPath(mesh, path);
      }
    });
  }

  $makeSeeking(mesh) {
    this._state.$seekers.push(mesh);
    events.one("ready", () => {
      this._ensureSeekerTimer();
    });
  }

  $makeHoverable(mesh) {
    this._ensureActionManager(mesh);
    mesh.overlayColor = Color3.White();

    mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPointerOverTrigger, () => {
        // Prevent brief "flashes of non-collision" when a dragged block
        // intersects with a hoverable block and the hover instance is
        // swapped for a double.
        if (!this._state.$playerControl || this._state.$dragStart) return;

        if (mesh.isAnInstance) {
          const double = mesh.sourceMesh.clone();
          double.overlayColor = Color3.White();
          double.renderOverlay = true;
          double.position = mesh.position;
          double.isVisible = true;
          mesh.isVisible = false;
          this.$makeWalkable(double);
          this._makeInstanceDouble(double);

          // It's easy to rapidly pointerOver another mesh before pointerOut
          // fires on the current, which leads to lots of orphaned doubles.
          // So doubles clean up after themselves.
          double._pointerOutInterval = setInterval(() => {
            // Babylon XR mode allows multiple pointers, and it's unclear how
            // this prop changes when multiple meshes are hovered. This seems
            // to work okay without additional logic.
            if (this._scene.meshUnderPointer !== double) {
              double.onInstancePointerOut();
            }
          }, 500);

          double.onInstancePointerOut = () => {
            mesh.isVisible = true;
            clearInterval(double._pointerOutInterval);
            double.dispose();
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

  _makeInstanceDouble(mesh) {
    this._ensureActionManager(mesh);
    this._shadows.addShadowCaster(mesh);
    mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPointerOutTrigger, () => {
        if (mesh.onInstancePointerOut) {
          mesh.onInstancePointerOut();
        }
      })
    );
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
    // BABYLON.RayHelper.CreateAndShow(
    //   top,
    //   this._scene,
    //   new BABYLON.Color3(1, 1, 0.1)
    // );

    const topPick = this._scene.pickWithRay(
      top,
      (mesh) => mesh.isWalkPath || mesh === this._state.$mainCharacter
    );
    return topPick.hit;
  }

  _hasAnyCollision(mesh) {
    // Only test with meshes in camera view, on same plane
    const active = this._scene.getActiveMeshes().data;
    const samePlane = active.filter((otherMesh) => {
      return (
        otherMesh !== mesh &&
        // Dragging can cause decimals, even on a restricted plane
        Math.round(mesh.position.y) === Math.round(otherMesh.position.y) &&
        otherMesh.id !== "BackgroundHelper" &&
        otherMesh.id !== "BackgroundPlane" &&
        otherMesh.id !== "BackgroundSkybox"
      );
    });
    return samePlane.some((otherMesh) => mesh.intersectsMesh(otherMesh));
  }

  // TODO Could be cleaned up. Does more calculations than needed, plus the ray
  // repositioning hack doesn't seem ideal.
  _getSafePosition(mesh) {
    const snap = mesh.position.clone();
    snap.x = Math.round(snap.x);
    snap.y = Math.round(snap.y);
    snap.z = Math.round(snap.z);

    const xDiff = mesh.position.x - snap.x;
    const zDiff = mesh.position.z - snap.z;
    const snapX = snap.clone();
    const snapZ = snap.clone();
    snapX.x += xDiff > 0 ? Math.round(xDiff + 0.5) : Math.round(xDiff - 0.5);
    snapZ.z += zDiff > 0 ? Math.round(zDiff + 0.5) : Math.round(zDiff - 0.5);
    const testPositions = [snap];
    if (Math.abs(xDiff) > Math.abs(zDiff)) {
      testPositions.push(snapX);
      testPositions.push(snapZ);
    } else {
      testPositions.push(snapZ);
      testPositions.push(snapX);
    }

    const safe = testPositions.find((pos) => {
      // Ray must intersect a bounding box to register a hit. A short ray would
      // fall _inside_ blocks. So we need to position these rays to hit the
      // edge without also intersecting blocks below.
      const origin = pos.clone();
      origin.y -= 0.49;
      const ray = new Ray(origin, Vector3.Up(), 0.99);
      // BABYLON.RayHelper.CreateAndShow(
      //   ray,
      //   this._scene,
      //   new BABYLON.Color3(1, 1, 0.1)
      // );
      const pick = this._scene.pickWithRay(
        ray,
        (otherMesh) => otherMesh !== mesh
      );
      return !pick.hit;
    });

    return safe;
  }
}
