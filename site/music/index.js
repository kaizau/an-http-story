import CPlayer from "./soundbox";
import song from "./soundbox-wilderness";

export default function initMusic() {
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
        audio.loop = true;
        audio.volume = 0.5;
        resolve(audio);
        return;
      }
      done = player.generate() >= 1;
    }, 0);
  });
}
