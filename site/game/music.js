import { delay } from "./utils";

// prettier-ignore
const songs = {
  404: [[[,0,200,,,2,1],[,0,400,,,2,1],[.8,0,2100,,,.2,3,3,,,-400,,,2],[,0,655,,,.09,3,1.65,,,,,.02,3.8,-.1,,.2]],[[[,,13,,,,16,,,,18,,,,20,,,,13,,,,16,,,,18,,,,20,,,,11,,,,15,,,,16,,,,18,,,,11,,,,15,,,,16,,,,18,,,,]],[[,,13,,,,16,,,,18,,,,20,,,,13,,,,16,,,,18,,,,20,,,,11,,,,15,,,,16,,,,18,,,,11,,,,15,,,,16,,,,18,,,,],[1,,32,,27,,28,,25,,,,,,,,,,,,,,,,,,,,,,,,,,30,,27,,28,,25,,,,,,,,,,,,,,,,,,,,,,,,,,,],[2,,,,,,36,,,,,,,,36,,,,,,,,36,,,,,,,,36,,,,,,,,36,,,,,,,,36,,,,,,,,36,,,,,,,,36,,,,]],[[,,13,,,,16,,,,18,,,,20,,,,13,,,,16,,,,18,,,,20,,,,11,,,,15,,,,16,,,,18,,,,11,,,,15,,,,16,,,,18,,,,],[1,,32,,27,,28,,25,,,,,,,,,,,,,,,,,,,,,,,,,,30,,27,,28,,25,,,,,,,,,,,,,,,,,,,,,,,,,,,],[2,,,,,,36,,,,,,,,36,,,,,,,,36,,,,,,,,36,,,,,,,,36,,,,,,,,36,,,,,,,,36,,,,,,,,36,,,,],[3,,34,,36,,,,30,,36,,36,,,,30,,36,,36,,,,30,,36,,36,,,,30,,36,,36,,,,30,,36,,36,,,,30,,36,,36,,,,30,,36,,36,,,,30,,]]],[1,2,2],100],
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
