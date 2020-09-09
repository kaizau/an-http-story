import World from "./game/World";
import { delay, ls } from "./game/utils";
import { replaceMeshStrings } from "./game/meshes";
import { createMusic, loadMusic } from "./music/player";

// NOTE Golfed away
// const loadingMessages = [
//   "Rebooting universe simulation",
//   "Fine tuning cosmological constant",
//   "Reticulating splines",
//   "Calibrating flux capacitor",
// ];

const qs = (q) => document.querySelector(q);
const canvas = qs(".cv");
const page = qs(".pg");
const loading = qs(".ld");
const directory = qs(".dr");
const helpTrigger = qs(".sh");
const moneyTrigger = qs(".sm");
const startTrigger = qs(".st");
const downloadBar = qs(".db");
const downloadItem = qs(".dl");
const downloadMessage = qs(".ms");
const modal = qs(".md");
const moneyWindow = qs(".mo");
const closeModal = document.querySelectorAll(".cm");
let music;

// if (process.env.DEBUG) {
//   startGame();
// } else {
//   init();
// }

init();

async function init() {
  music = await loadMusic();
  if (!music) {
    // showLoading();
    loading.classList.remove("h");
    music = await createMusic();
    loading.classList.add("h");
  }
  directory.classList.remove("h");
  loadProgress();
  checkEnding();
  checkMonetization();

  closeModal.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentElement.classList.add("h");
      downloadBar.classList.add("o");
      downloadBar.classList.remove("c");
      modal.classList.add("h");
    });
  });

  helpTrigger.addEventListener("click", () => {
    const helpWindow = qs(".hp");
    modal.classList.remove("h");
    helpWindow.classList.remove("h");
  });

  moneyTrigger.addEventListener("click", () => {
    modal.classList.remove("h");
    moneyWindow.classList.remove("h");
  });

  startTrigger.addEventListener("click", async () => {
    modal.classList.remove("h");
    downloadBar.classList.remove("o");
    downloadMessage.textContent = "Preparing download...";

    await delay(3000);
    downloadMessage.textContent = "Unexpected error";
    music.play();

    await delay(2000);
    page.classList.add("z");

    await delay(4000);
    startGame();
  });
}

// async function showLoading() {
//   if (loadingMessages.length) {
//     loading.textContent = loadingMessages.pop() + "...";
//     await delay(1500);
//     showLoading();
//   }
// }

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
// Subscribers
//

function checkMonetization() {
  const monetization = document.monetization;
  if (monetization) {
    monetization.addEventListener("monetizationstart", enableCustomLevels);
  }
}

function enableCustomLevels() {
  qs(".mn").classList.add("h");
  qs(".my").classList.remove("h");
  const field = qs(".cl");
  moneyWindow.addEventListener("submit", (e) => {
    e.preventDefault();
    let level;
    try {
      level = JSON.parse(field.value);
    } catch (e) {
      console.log(e);
    }
    if (level) {
      level.map = replaceMeshStrings(level.map);
      music.play();
      startGame(level);
    }
  });
}

//
// Endings
//

async function checkEnding() {
  let ending;
  if (location.search.includes("ending=0")) {
    ending = endingLose;
  } else if (location.search.includes("ending=1")) {
    ending = endingWin;
  }

  if (ending) {
    if (history) {
      history.replaceState({}, "", location.pathname);
    }

    modal.classList.remove("h");
    downloadBar.classList.remove("o");
    downloadMessage.textContent = "Preparing download...";
    await delay(3000);
    ending();
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
