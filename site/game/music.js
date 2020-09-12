import { delay } from "./utils";

// prettier-ignore
const songs = {
  404: [[[.5,0,196,,,.8,2,.5,,,,,,,,.2,,.5,,.5]],[[[,,13,,,,,,,,16,,,,,,,,18,,,,,,,,20,,,,,,,,13,,,,,,,,16,,,,,,,,18,,,,,,,,20,,,,,,,,]],[[,,11,,,,,,,,15,,,,,,,,16,,,,,,,,18,,,,,,,,11,,,,,,,,15,,,,,,,,16,,,,,,,,18,,,,,,,,]],[[,,18,,,,,,,,15,,,,,,,,16,,,,,,,,18,,,,,,,,11,,,,,,11,,15,,,,,,,,16,,,,,,,,18,,,,,,,,]]],[0,1,0,2],150]
};

let audio;
export async function playMusic(name = "404") {
  const song = songs[name];
  const songData = zzfxM(...song);

  await stopMusic();
  audio = zzfxP(...songData);
  audio.loop = true;

  const volume = audio.context.createGain();
  volume.gain.value = 1.0;
  volume.connect(audio.context.destination);
  audio.connect(volume);

  // Probably some better way to expose this
  audio._volume = volume;
  return audio;
}

export async function stopMusic() {
  if (audio) {
    audio._volume.gain.linearRampToValueAtTime(
      0,
      audio.context.currentTime + 3
    );
    await delay(5000);
    audio.stop();
  }
}

window.stop = stopMusic;
