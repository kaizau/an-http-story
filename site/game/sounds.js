import { delay } from "./utils";

// https://killedbyapixel.github.io/ZzFX/

// prettier-ignore
const sounds = {
  teleport: [ , , 187, 0.39, 0.27, 0.54, 1, 0.17, 1.7, 1.9, -7, 0.08, 0.29, , , , 0.03, 0.59, 0.01, 0.39 ],
  die: [ , , 670, 0.43, 0.29, 0.77, 1, 0.14, 1.4, -0.9, -58, 0.07, 0.04, , , , , 0.88, 0.01, 0.4 ],
  friend: [ , , 1127, , 0.06, 0.2, 1, 0.69, , , 412, 0.06, 0.07, , , , 0.08, 0.68, 0.03, 0.18 ],
  foe: [, , 900, , 0.4, 0.58, , 0.3, , , , , , , , 0.9, , 0.8, 0.05],
  // magic: [,,280,.22,.12,.87,1,1.73,,,714,.08,.19,,,,.1,.59,.04,.27],
};

export function playSound(name) {
  return new Promise((resolve) => {
    const sound = sounds[name];
    if (sound) {
      const audio = zzfx(...sound);
      audio.onended = async () => {
        await delay(500);
        resolve();
      };
    } else {
      resolve();
    }
  });
}
