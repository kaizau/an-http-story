import { playSound } from "./sounds";
import { delay, events } from "./utils";
import { TLX } from "./levels";
const {
  ActionManager,
  ExecuteCodeAction,
  PointerDragBehavior,
  Color3,
  Vector3,
  Ray,
} = BABYLON;
const {
  OnPickTrigger,
  OnPointerOverTrigger,
  OnPointerOutTrigger,
  OnIntersectionEnterTrigger,
} = ActionManager;

// TODO Instead of outlines, maybe glow or mesh.renderOverlay?
const primaryOutline = new Color3(0, 1, 1);
const errorOutline = new Color3(1, 1, 0);

// TODO Are action managers automatically disposed when meshes are disposed?
export class MeshMixins {
  constructor(scene, state, animationMixins) {
    this.scene = scene;
    this.state = state;
    this.animationMixins = animationMixins;
  }

  makeWalkable(mesh) {
    this._ensureActionManager(mesh);
    mesh.isWalkable = true;

    mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPickTrigger, () => {
        if (!this.state.playerControl || this.state.drag === mesh) return;

        const main = this.state.mainCharacter;
        if (main) {
          const target = mesh.position.clone();
          target.y = main.position.y;
          this.animationMixins.walkTo(main, target);
        }
      })
    );
  }

  makeDraggable(mesh) {
    mesh.outlineColor = primaryOutline;
    const pointerDragBehavior = new PointerDragBehavior({
      dragPlaneNormal: new Vector3(0, 1, 0),
    });
    pointerDragBehavior.moveAttached = false;
    pointerDragBehavior.onDragStartObservable.add(async () => {
      if (!this.state.playerControl || this._hasCharacterOnTop(mesh)) {
        mesh.outlineColor = errorOutline;
        mesh.renderOutline = true;
        return;
      }

      // Slight delay to accommodate oversensitive VR controllers
      this.state.dragStart = true;
      await delay(150);
      if (this.state.dragStart) {
        mesh.renderOutline = true;
        mesh.renderOverlay = false;
        this.state.drag = mesh;
        this.state.dragLastSafePosition = mesh.position.clone();
      }
    });
    pointerDragBehavior.onDragObservable.add((event) => {
      if (!this.state.drag || !this.state.playerControl) {
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
        this.state.dragLastSafePosition = safe;
      }
    });
    pointerDragBehavior.onDragEndObservable.add(() => {
      let snap;
      if (this._hasAnyCollision(mesh)) {
        snap = this.state.dragLastSafePosition;
      } else {
        snap = mesh.position.clone();
      }
      snap.x = Math.round(snap.x);
      snap.z = Math.round(snap.z);
      this.animationMixins.floatTo(mesh, snap);
      this.state.drag = null;
      this.state.dragStart = false;
      this.state.dragLastSafePosition = null;

      mesh.outlineColor = primaryOutline;
      mesh.renderOutline = false;
    });
    mesh.addBehavior(pointerDragBehavior);
  }

  makeMainCharacter(mesh) {
    mesh.isMainCharacter = true;
    this.state.mainCharacter = mesh;
  }

  makeTeleporter(mesh, id) {
    this._ensureActionManager(mesh);
    mesh.isTeleporter = true;
    this.state.teleporters.push(mesh);

    events.one("levelReady", () => {
      const main = this.state.mainCharacter;

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
              // TODO Currently single use only
              if (mesh.teleporterActivated) return;
              mesh.teleporterActivated = true;

              const paired = this.state.teleporters.find((otherMesh) => {
                return (
                  mesh !== otherMesh && otherMesh.name === "teleporter-" + id
                );
              });
              paired.teleporterActivated = true;

              await delay(250); // Allow character to reach center
              this.animationMixins.exitScene(main, () => {
                const yTarget = paired.position.y;
                main.position.x = paired.position.x;
                main.position.y = paired.position.y + 10;
                main.position.z = paired.position.z;
                this.animationMixins.enterScene(main, yTarget);
              });
            }
          }
        )
      );
    });
  }

  makeEnemy(mesh) {
    this._ensureActionManager(mesh);
    mesh.isEnemy = true;

    events.one("levelReady", () => {
      mesh.actionManager.registerAction(
        new ExecuteCodeAction(
          {
            trigger: OnIntersectionEnterTrigger,
            parameter: this.state.mainCharacter,
          },
          () => {
            this.state.playerControl = false;
            playSound("die");
            this.animationMixins.swallowedByEye(
              mesh,
              this.state.mainCharacter,
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

  makePatrolling(mesh) {
    mesh.isPatrolling = true;

    events.one("levelReady", () => {
      const y = mesh.position.y;
      const path = this.state.eyePatrolPath[y];
      if (path) {
        this.animationMixins.patrolPath(mesh, path);
      }
    });
  }

  makeInstanceDouble(mesh) {
    this._ensureActionManager(mesh);
    mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPointerOutTrigger, () => {
        if (mesh.onInstancePointerOut) {
          mesh.onInstancePointerOut();
        }
      })
    );
  }

  makeHoverable(mesh) {
    this._ensureActionManager(mesh);
    mesh.overlayColor = Color3.White();

    mesh.actionManager.registerAction(
      new ExecuteCodeAction(OnPointerOverTrigger, () => {
        if (this.state.drag) return;

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
    mesh.actionManager = mesh.actionManager || new ActionManager(this.scene);
  }

  _hasCharacterOnTop(mesh) {
    const start = mesh.position.clone();
    start.y += 0.5;
    const top = new Ray(start, new Vector3(0, 1, 0), 1);
    const topPick = this.scene.pickWithRay(top, (mesh) => mesh.isMainCharacter);
    return topPick.hit;
  }

  _hasAnyCollision(mesh) {
    // Only test with meshes in camera view, on same plane
    const active = this.scene.getActiveMeshes().data;
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
