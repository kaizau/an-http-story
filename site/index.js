import "./vendor/zzfx";
import "./vendor/zzfxm";

import World from "./game/World";
import { delay, ls } from "./game/utils";
import { replaceMeshStrings } from "./game/meshes";
import { playMusic } from "./game/music";

const qs = (q) => document.querySelector(q);
const canvas = qs(".cv");
const page = qs(".pg");
const directory = qs(".dr");
const helpTrigger = qs(".sh");
const moneyTrigger = qs(".sm");
const startTrigger = qs(".st");
const downloadBar = qs(".db");
const downloadItem = qs(".dl");
const downloadMessage = qs(".ms");
const modal = qs(".md");
const helpWindow = qs(".hp");
const moneyWindow = qs(".mo");
const closeModal = document.querySelectorAll(".cm");

// if (process.env.DEBUG) {
//   startGame();
//   enableCustomLevels();
// } else {
//   init();
// }

init();

async function init() {
  if (!ls.get("AHS")) {
    modal.classList.remove("h");
    helpWindow.classList.remove("h");
  }

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

    await delay(2000);
    downloadMessage.textContent = "Unexpected error";
    playMusic();

    await delay(2000);
    page.classList.add("z");

    await delay(4000);
    startGame();
  });
}

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
      startGame(level);
    }
  });
}

//
// Endings
//

async function checkEnding() {
  let ending;

  const endingType = ls.get("AHS-ending");
  if (endingType) {
    if (endingType === "win") {
      ending = endingWin;
    } else if (endingType === "lose") {
      ending = endingLose;
    }
    ls.del("AHS-ending");
  }

  // NOTE Workaroud Oculus Browser refresh bug
  // if (location.search.includes("ending=0")) {
  //   ending = endingLose;
  // } else if (location.search.includes("ending=1")) {
  //   ending = endingWin;
  // }

  if (ending) {
    // if (history) {
    //   history.replaceState({}, "", location.pathname);
    // }

    modal.classList.remove("h");
    downloadBar.classList.remove("o");
    downloadMessage.textContent = "Preparing download...";
    await delay(2000);
    ending();
  }
}

function endingLose() {
  const notification = qs(".nt");
  const ending = qs(".ls");

  downloadMessage.textContent = "Unexpected error";
  notification.classList.remove("o");
  notification.addEventListener("click", () => {
    notification.classList.add("o");
    ending.classList.remove("h");
    playMusic("401");
  });
}

function endingWin() {
  const ending = qs(".wn");

  downloadMessage.textContent = "Click to open";
  downloadItem.classList.add("c");
  downloadItem.addEventListener("click", () => {
    ending.classList.remove("h");
    playMusic();
  });
}
