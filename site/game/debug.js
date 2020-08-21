import speak from "./speak";
import levels from "./levels";

export default function debug(game, state) {
  window.game = game;
  window.state = state;

  // Shift+I
  window.addEventListener("keydown", (ev) => {
    if (ev.shiftKey && ev.keyCode === 73 && game.world.scene) {
      if (game.world.scene.debugLayer.isVisible()) {
        game.world.scene.debugLayer.hide();
      } else {
        game.world.scene.debugLayer.show();
      }
    }
  });

  const debugBar = document.createElement("div");
  debugBar.style.bottom = "10px";
  debugBar.style.left = "10px";
  debugBar.style.padding = "10px";
  debugBar.style.position = "absolute";
  debugBar.style.width = "100%";
  debugBar.style.zIndex = 100;
  document.body.appendChild(debugBar);

  const speechButton = document.createElement("button");
  speechButton.textContent = "Test Speech";
  speechButton.addEventListener("click", () => {
    speak(
      "Where am... I... What is this place? Please! Help me find my friends."
    );
  });
  debugBar.appendChild(speechButton);

  Object.keys(levels).forEach((key) => {
    const level = levels[key];
    const button = document.createElement("button");
    button.textContent = `Level ${key}`;
    button.addEventListener("click", () => {
      game.world.loadLevel(level);
    });
    debugBar.appendChild(button);
  });
}
