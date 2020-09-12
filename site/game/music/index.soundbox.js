import CPlayer from "./soundbox";
import song from "./wilderness-slim";
import { delay } from "../utils";

let db;

export const music = {
  async $ready() {
    if (!db) db = await getDB();

    const songData = await db.get("mainTheme");
    if (songData) {
      music.audio = createAudio(songData);
    }
    return !!songData;
  },

  async $load() {
    // if (!db) db = await getDB();

    return new Promise((resolve) => {
      let done;
      const generator = new CPlayer();
      generator.init(song);

      const generate = setInterval(() => {
        if (!done) {
          done = generator.generate() >= 1;
        } else {
          clearInterval(generate);
          const wave = generator.createWave();
          const blob = new Blob([wave], { type: "audio/wav" });

          db.set("mainTheme", blob);
          music.audio = createAudio(blob);
          resolve();
        }
      }, 0);
    });
  },

  $play() {
    music.audio.play();
  },

  async $stop() {
    let volume = music.audio.volume;
    while (volume > 0) {
      volume -= 0.05;
      music.audio.volume = volume > 0 ? volume : 0;
      await delay(100);
    }
    music.audio.pause();
  },
};

function createAudio(music) {
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
