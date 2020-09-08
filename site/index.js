import World from "./game/World";
import { ls } from "./game/utils";
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
const startTrigger = qs(".st");
const helpTrigger = qs(".sh");
const downloadBar = qs(".db");
const downloadItem = qs(".dl");
const downloadMessage = qs(".ms");
const modal = qs(".md");
const closeModal = document.querySelectorAll(".cm");
let music;

init();

/** @suppress {uselessCode} */
async function init() {
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

  closeModal.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.target.parentElement.classList.add("h");
      downloadBar.classList.add("o");
      downloadBar.classList.remove("c");
      modal.classList.add("h");
    });
  });

  helpTrigger.addEventListener("click", () => {
    const help = qs(".hp");
    modal.classList.remove("h");
    help.classList.remove("h");
  });

  startTrigger.addEventListener("click", () => {
    modal.classList.remove("h");
    downloadBar.classList.remove("o");
    downloadMessage.textContent = "Preparing download...";

    setTimeout(() => {
      downloadMessage.textContent = "Unexpected error";
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

//
// Saved levels
//

function loadProgress() {
  const levels = ls.get("AHS", []);
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
    downloadMessage.textContent = "Preparing download...";
    setTimeout(ending, 3000);

    if (history) {
      history.replaceState({}, "", location.pathname);
    }
  }
}

function endingLose() {
  const notification = qs(".nt");
  const ending = qs(".ls");

  downloadMessage.textContent = "Unexpected error";
  notification.classList.remove("o");
  notification.addEventListener("click", () => {
    music.play();
    notification.classList.add("o");
    ending.classList.remove("h");
  });
}

function endingWin() {
  const ending = qs(".wn");

  downloadMessage.textContent = "Click to open";
  downloadItem.classList.add("c");
  downloadItem.addEventListener("click", () => {
    music.play();
    ending.classList.remove("h");
  });
}
