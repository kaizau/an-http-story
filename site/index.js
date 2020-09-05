import World from "./game/World";
import { progress } from "./game/utils";
import { loadMusic, createMusic } from "./music/player";

const loadingMessages = [
  "Rebooting universe simulation",
  "Fine tuning cosmological constant",
  "Reticulating splines",
  "Calibrating flux capacitor",
];

const canvas = document.querySelector("#canvas");
const page = document.querySelector("#page");
const loading = document.querySelector("#loading");
const directory = document.querySelector("#directory");
const start = document.querySelector("#start");
const downloads = document.querySelector("#downloads");
const message = document.querySelector("#message");
const modal = document.querySelector("#modal");
let music;

init();

/** @suppress {uselessCode} */
async function init() {
  if (process.env.DEBUG) {
    startGame();
    return;
  }

  music = await loadMusic();
  if (!music) {
    showLoading();
    loading.classList.remove("hidden");
    music = await createMusic();
    loading.classList.add("hidden");
  }
  directory.classList.remove("hidden");
  checkEnding();
  loadProgress();

  start.addEventListener("click", () => {
    modal.classList.remove("hidden");
    downloads.classList.remove("offscreen");
    message.textContent = "Preparing download...";

    setTimeout(() => {
      message.textContent = "Unexpected error";
      music.play();

      setTimeout(() => {
        page.classList.add("zoom");

        setTimeout(startGame, 4000);
      }, 2000);
    }, 3000);
  });
}

function showLoading() {
  if (loadingMessages.length) {
    loading.textContent = loadingMessages.pop() + "...";
    setTimeout(showLoading, 1500);
  }
}

/** @suppress {uselessCode} */
function startGame(level = 1) {
  page.classList.add("hidden");
  page.classList.remove("zoom");
  downloads.classList.add("offscreen");
  modal.classList.add("hidden");
  canvas.classList.remove("hidden");

  const world = new World(level);

  if (process.env.DEBUG) {
    window.world = world;
  }
}

function loadProgress() {
  const levels = progress.get();
  levels.forEach(createShortcut);
}

function createShortcut(level) {
  const item = document.createElement("p");
  item.textContent = "📄 ";

  const link = document.createElement("a");
  link.textContent = `level_${level}.log`;
  link.href = "#";
  link.addEventListener("click", () => {
    music.play();
    startGame(level);
  });

  item.appendChild(link);
  directory.appendChild(item);
}

function checkEnding() {
  let ending;
  if (location.search.includes("ending=0")) {
    ending = endingLose;
  } else if (location.search.includes("ending=1")) {
    ending = endingWin;
  }

  if (ending) {
    modal.classList.remove("hidden");
    downloads.classList.remove("offscreen");
    message.textContent = "Preparing download...";
    setTimeout(ending, 3000);

    const playAgain = document.querySelectorAll(".play-again");
    playAgain.forEach((el) => {
      el.addEventListener("click", () => {
        location.href = location.pathname;
      });
    });

    if (history) {
      history.replaceState({}, "", location.pathname);
    }
  }
}

function endingLose() {
  const note = document.querySelector("#notification");
  const ending = document.querySelector("#lose");

  message.textContent = "Unexpected error";
  note.classList.remove("offscreen");
  note.addEventListener("click", () => {
    music.play();
    note.classList.add("hidden");
    ending.classList.remove("hidden");
  });
}

function endingWin() {
  const download = document.querySelector("#download");
  const ending = document.querySelector("#win");

  download.classList.add("clickable");
  message.textContent = "Click to open";
  download.addEventListener("click", () => {
    music.play();
    ending.classList.remove("hidden");
  });
}
