import World from "./game/World";
import { progress } from "./game/utils";
import { loadMusic, createMusic } from "./music/player";

const loadingMessages = [
  "Rebooting universe simulation",
  "Fine tuning cosmological constant",
  "Reticulating splines",
  "Calibrating flux capacitor",
];

const qs = (q) => document.querySelector(q);
const canvas = qs(".cv");
const page = qs(".pg");
const loading = qs(".ld");
const directory = qs(".dr");
const start = qs(".st");
const downloadBar = qs(".db");
const message = qs(".ms");
const modal = qs(".md");
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
    loading.classList.remove("h");
    music = await createMusic();
    loading.classList.add("h");
  }
  directory.classList.remove("h");
  checkEnding();
  loadProgress();

  start.addEventListener("click", () => {
    modal.classList.remove("h");
    downloadBar.classList.remove("o");
    message.textContent = "Preparing download...";

    setTimeout(() => {
      message.textContent = "Unexpected error";
      music.play();

      setTimeout(() => {
        page.classList.add("z");

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
  page.classList.add("h");
  page.classList.remove("z");
  downloadBar.classList.add("o");
  modal.classList.add("h");
  canvas.classList.remove("h");

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

//
// Endings
//

function checkEnding() {
  let ending;
  if (location.search.includes("ending=0")) {
    ending = endingLose;
  } else if (location.search.includes("ending=1")) {
    ending = endingWin;
  }

  if (ending) {
    modal.classList.remove("h");
    downloadBar.classList.remove("o");
    message.textContent = "Preparing download...";
    setTimeout(ending, 3000);

    const playAgain = document.querySelectorAll(".pa");
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
  const note = qs(".nt");
  const ending = qs(".ls");

  message.textContent = "Unexpected error";
  note.classList.remove("o");
  note.addEventListener("click", () => {
    music.play();
    note.classList.add("h");
    ending.classList.remove("h");
  });
}

function endingWin() {
  const download = qs(".dl");
  const ending = qs(".wn");

  download.classList.add("c");
  message.textContent = "Click to open";
  download.addEventListener("click", () => {
    music.play();
    ending.classList.remove("h");
  });
}
