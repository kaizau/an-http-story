import CPlayer from "./soundbox";
// import song from "./wilderness";
import song from "./wilderness-slim";

let db;

export async function loadMusic() {
  if (!db) db = await getDB();

  const music = await db.get("mainTheme");
  if (music) {
    return createPlayer(music);
  }
}

export async function createMusic() {
  if (!db) db = await getDB();

  return new Promise((resolve) => {
    let done;
    const player = new CPlayer();
    player.init(song);

    const generate = setInterval(() => {
      if (!done) {
        done = player.generate() >= 1;
      } else {
        clearInterval(generate);
        const wave = player.createWave();
        const blob = new Blob([wave], { type: "audio/wav" });

        db.set("mainTheme", blob);
        resolve(createPlayer(blob));
      }
    }, 0);
  });
}

function createPlayer(music) {
  const audio = document.createElement("audio");
  audio.src = URL.createObjectURL(music);
  audio.loop = true;
  audio.volume = 0.5;
  return audio;
}

class DB {
  constructor(db) {
    this.db = db;
  }

  get(key) {
    return new Promise((resolve) => {
      const trans = this.db.transaction(["game"], "readonly");
      const request = trans.objectStore("game").get(key);
      request.onsuccess = (e) => {
        resolve(e.target.result);
      };
    });
  }

  set(key, value) {
    return new Promise((resolve) => {
      const trans = this.db.transaction(["game"], "readwrite");
      const request = trans.objectStore("game").add(value, key);
      request.onsuccess = (e) => {
        resolve(e.target.result);
      };
    });
  }
}

function getDB() {
  return new Promise((resolve) => {
    const request = indexedDB.open("AHS", 1);
    request.onsuccess = (e) => {
      const db = e.target.result;
      resolve(new DB(db));
    };
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      db.createObjectStore("game");
    };
    // request.onerror = (e) => {
    //   console.log(e);
    // };
  });
}
