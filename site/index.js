import World from "./game/World";
import { initDebug } from "./game/debug";
import CPlayer from "./music/soundbox";
import song from "./music/soundbox-wilderness";

const body = document.body;
const canvas = document.querySelector("#canvas");
const directory = document.querySelector("#directory");
const start = document.querySelector("#start");
const downloads = document.querySelector("#downloads");
const message = document.querySelector("#message");
let music;

if (process.env.DEBUG) {
  startGame();
} else {
  music = createMusic();
  loadProgress();

  start.addEventListener("click", () => {
    downloads.classList.remove("offscreen");
    message.textContent = "Preparing download...";

    setTimeout(() => {
      message.textContent = "Unexpected error";
      music.then((audio) => audio.play());

      setTimeout(() => {
        body.classList.add("zoom");

        setTimeout(startGame, 4000);
      }, 2000);
    }, 3000);
  });
}

function startGame(level = 1) {
  directory.classList.add("hidden");
  downloads.classList.add("offscreen");
  body.classList.remove("zoom");
  canvas.classList.remove("hidden");

  const world = new World(level);
  if (process.env.DEBUG) {
    initDebug(world);
  }
}

function loadProgress() {
  let progress;
  try {
    progress = JSON.parse(localStorage.progress);
  } catch (e) {
    // No progress
  }
  if (progress) {
    progress.forEach(createShortcut);
  }
}

function createShortcut(level) {
  const item = document.createElement("p");
  item.textContent = "📄 ";

  const link = document.createElement("a");
  link.textContent = `level_${level}.log`;
  link.href = "#";
  link.addEventListener("click", (e) => {
    music.then((audio) => audio.play());
    startGame(level);
  });

  item.appendChild(link);
  directory.appendChild(item);
}

function createMusic() {
  if (process.env.DEBUG) {
    return { then() {} };
  }

  return new Promise((resolve) => {
    const player = new CPlayer();
    let done;

    player.init(song);
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
