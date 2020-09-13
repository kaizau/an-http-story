// Some helpful advice: https://talkrapp.com/speechSynthesis.html
// Voice tester: https://mdn.github.io/web-speech-api/speak-easy-synthesis/

export let friendVoice;
export let foeVoice;

const friendVoices = [
  // Best, instantly likeable
  {
    name: "Microsoft Mia Online (Natural) - English (United Kingdom)",
    rate: 1,
    pitch: 1.5,
  },

  // Acceptable default (Apple)
  {
    name: "Samantha",
    rate: 0.8,
    pitch: 1.8,
  },

  // Innocent and child-like
  {
    name: "Google US English",
    rate: 0.7,
    pitch: 1,
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
    volume: 0.7,
  },

  // Yet another Bond villain
  {
    name: "Google UK English Male",
    rate: 1,
    pitch: 0.8,
  },

  // Way too friendly, but as a MS fallback
  {
    name: "Microsoft Guy Online (Natural) - English (United States)",
    // name: "Microsoft Yunyang Online (Natural) - Chinese (Mainland)",
    rate: 1,
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
  const allVoices = speechSynthesis.getVoices().sort((a, b) => {
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
    if (found) friend.voice = found;
    return !!found;
  });

  foeVoice = foeVoices.find((foe) => {
    const found = allVoices.find((item) => item.name === foe.name);
    if (found) foe.voice = found;
    return !!found;
  });

  // Remove since onvoiceschanged may be called again when voice spoken
  if (allVoices.length) {
    delete speechSynthesis.onvoiceschanged;
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
