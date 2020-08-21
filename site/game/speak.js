// Some helpful advice:
// https://talkrapp.com/speechSynthesis.html

const preferredVoices = [
  // Best, instantly likeable
  {
    name: "Microsoft Mia Online (Natural) - English (United Kingdom)",
    rate: 1,
    pitch: 1.5,
  },

  // Innocent and child-like
  {
    name: "Google US English",
    rate: 0.7,
    pitch: 1.5,
  },

  // Acceptable default
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

  // A haunted ghost spirit!
  // {
  //   name: "Moira",
  //   rate: 0.8,
  //   pitch: 1.5,
  // },
];

let voice;

function chooseVoice() {
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

  voice = preferredVoices.find((preferred) => {
    const found = allVoices.find((item) => item.name === preferred.name);
    if (found) {
      preferred.voice = found;
      return found;
    }
  });

  // Remove since onvoiceschanged may be called again when voice spoken
  if (voice) {
    speechSynthesis.onvoiceschanged = null;
  }
}

if (window.speechSynthesis) {
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = chooseVoice;
  }
  chooseVoice();
}

export default function speak(text) {
  if (!window.speechSynthesis) return;

  const utterance = new SpeechSynthesisUtterance(text);
  if (voice) {
    utterance.voice = voice.voice;
    utterance.pitch = voice.pitch;
    utterance.rate = voice.rate;
  }
  window.speechSynthesis.speak(utterance);
}
