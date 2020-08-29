import World from "./game/World";
import { initDebug } from "./game/debug";
import CPlayer from "./music/soundbox";
import song from "./music/soundbox-wilderness";

const body = document.body;
const canvas = document.querySelector("#canvas");
const directory = document.querySelector("#directory");
const start = document.querySelector("#start");
const message = document.querySelector("#message");

// TODO Disable for testing
startGame();
// const music = createMusic();

start.addEventListener("click", () => {
  message.textContent = "Preparing download...";

  setTimeout(() => {
    message.textContent = "Error";
    music.then((audio) => audio.play());

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

function createMusic() {
  const player = new CPlayer();
  player.init(song);

  return new Promise((resolve) => {
    let done;
    const generate = setInterval(() => {
      if (done) {
        clearInterval(generate);
        const wave = player.createWave();
        const audio = document.createElement("audio");
        audio.src = URL.createObjectURL(
          new Blob([wave], { type: "audio/wav" })
        );
        resolve(audio);
        return;
      }

      done = player.generate() >= 1;
    }, 0);
  });
}
