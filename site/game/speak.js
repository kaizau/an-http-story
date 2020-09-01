import { playSound } from "./sounds";

// Some helpful advice: https://talkrapp.com/speechSynthesis.html
// Voice tester: https://mdn.github.io/web-speech-api/speak-easy-synthesis/

let friendVoice;
let foeVoice;

const friendVoices = [
  // Best, instantly likeable
  {
    name: "Microsoft Mia Online (Natural) - English (United Kingdom)",
    rate: 1,
    pitch: 1.5,
  },

  // Innocent and child-like
  {
    name: "Google US English",
    rate: 0.8,
    pitch: 1.0,
  },

  // Acceptable default (Apple)
  {
    name: "Samantha",
    rate: 0.8,
    pitch: 1.8,
  },

  // Hyperactive fairy girl
  // {
  //   name: "Victoria",
  //   rate: 0.8,
  //   pitch: 1.25,
  // },
];

const foeVoices = [
  // Bond villain (Apple)
  {
    name: "Daniel",
    rate: 0.8,
    pitch: 0.5,
  },

  // Yet another Bond villain
  {
    name: "Google UK English Male",
    rate: 0.8,
    pitch: 0.5,
  },

  // Way too friendly, but as a MS fallback
  {
    name: "Microsoft Guy Online (Natural) - English (United States)",
    // name: "Microsoft Yunyang Online (Natural) - Chinese (Mainland)",
    rate: 1.0,
    pitch: 0.1,
  },

  // A haunted ghost spirit!
  // {
  //   name: "Moira",
  //   rate: 0.8,
  //   pitch: 1.5,
  // },
];

function chooseVoices() {
  const allVoices = window.speechSynthesis.getVoices().sort((a, b) => {
    const aname = a.name.toUpperCase();
    const bname = b.name.toUpperCase();
    if (aname < bname) {
      return -1;
    } else if (aname === bname) {
      return 0;
    } else {
      return 1;
    }
  });

  friendVoice = friendVoices.find((friend) => {
    const found = allVoices.find((item) => item.name === friend.name);
    if (found) {
      friend.voice = found;
      return found;
    }
  });

  foeVoice = foeVoices.find((foe) => {
    const found = allVoices.find((item) => item.name === foe.name);
    if (found) {
      foe.voice = found;
      return found;
    }
  });

  // Remove since onvoiceschanged may be called again when voice spoken
  if (allVoices.length) {
    speechSynthesis.onvoiceschanged = null;
  }
}

if (window.speechSynthesis) {
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = chooseVoices;
  }
  chooseVoices();
} else {
  console.log("No SpeechSynthesis support");
}

function Line(text) {
  let voice = friendVoice;
  if (text.slice(0, 5) === "FOE: ") {
    text = text.slice(5);
    voice = foeVoice;
  }

  // TODO Each line is a promise
  const utterance = new SpeechSynthesisUtterance(text);
  if (voice) {
    utterance.voice = voice.voice;
    utterance.pitch = voice.pitch;
    utterance.rate = voice.rate;
  }
  return utterance;
}

export function speak(lines = []) {
  if (!lines.length) {
    return Promise.resolve();
  }
  if (!window.speechSynthesis || process.env.DEBUG) {
    zzfx(...friendSound);
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const dialogue = lines.map((line) => new Line(line));
    const lastLine = dialogue[dialogue.length - 1];
    lastLine.onend = () => resolve();
    dialogue.forEach((line) => window.speechSynthesis.speak(line));
  });
}
