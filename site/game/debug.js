import speak from "./speak";
import levels from "./levels";

let debugBar;

export default function debug(game, state) {
  window.game = game;
  window.state = state;

  createButton("Debug", () => {
    if (!game.world.scene) return;
    if (game.world.scene.debugLayer.isVisible()) {
      game.world.scene.debugLayer.hide();
    } else {
      game.world.scene.debugLayer.show();
    }
  });

  createButton("Test Speech", () => {
    speak(
      "Where am... I... What is this place? Please! Help me find my friends."
    );
  });

  Object.keys(levels).forEach((key) => {
    const level = levels[key];
    createButton(`Level ${key}`, () => {
      game.world.loadLevel(level);
    });
  });
}

function createDebugBar() {
  const debugBar = document.createElement("div");
  debugBar.style.bottom = "10px";
  debugBar.style.left = "10px";
  debugBar.style.padding = "10px";
  debugBar.style.position = "absolute";
  debugBar.style.width = "100%";
  debugBar.style.zIndex = 100;
  document.body.appendChild(debugBar);
  return debugBar;
}

function createButton(label, handler) {
  debugBar = debugBar || createDebugBar();

  const button = document.createElement("button");
  button.textContent = label;
  button.addEventListener("click", () => handler());
  debugBar.appendChild(button);
}
