import World from "./game/World";
import initDebug from "./game/debug";
import progress from "./game/progress";
import initMusic from "./music";

const body = document.body;
const canvas = document.querySelector("#canvas");
const directory = document.querySelector("#directory");
const start = document.querySelector("#start");
const downloads = document.querySelector("#downloads");
const message = document.querySelector("#message");
const modal = document.querySelector("#modal");
let music;

if (process.env.DEBUG) {
  startGame();
} else {
  music = initMusic();
  checkEnding();
  loadProgress();

  start.addEventListener("click", () => {
    modal.classList.remove("hidden");
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
  modal.classList.add("hidden");
  body.classList.remove("zoom");
  canvas.classList.remove("hidden");

  const world = new World(level);
  if (process.env.DEBUG) {
    initDebug(world);
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
    music.then((audio) => audio.play());
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
      history.replaceState({}, null, location.pathname);
    }
  }
}

function endingLose() {
  const note = document.querySelector("#notification");
  const ending = document.querySelector("#lose");

  message.textContent = "Unexpected error";
  note.classList.remove("offscreen");
  note.addEventListener("click", () => {
    music.then((audio) => audio.play());
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
    music.then((audio) => audio.play());
    ending.classList.remove("hidden");
  });
}
