import World from "./game/World";
import { initDebug } from "./game/debug";

const body = document.body;
const canvas = document.querySelector("#canvas");
const directory = document.querySelector("#directory");
const start = document.querySelector("#start");
const message = document.querySelector("#message");

start.addEventListener("click", () => {
  message.textContent = "Preparing download...";

  setTimeout(() => {
    message.textContent = "Error";

    setTimeout(() => {
      body.classList.add("zoom");

      setTimeout(startGame, 4000);
    }, 2000);
  }, 2000);
});

function startGame() {
  directory.classList.add("hidden");
  canvas.classList.remove("hidden");
  body.classList.remove("zoom");

  const world = new World();
  initDebug(world);
}
