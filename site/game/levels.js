// let BLNK;
export const ZYRA = 0;
export const TELE = 1;
export const BLCK = 2;
export const MVBK = 3;
export const EYEB = 4;
export const LASR = 5;
export const GATE = 6;
export const TELA = 7;
export const TELB = 8;
export const TELC = 9;

// Export object for flexible naming
// prettier-ignore
export const levels = {
  1: {
    intro: [
      "Ouch...",
      "Where am I?",
      "This isn't the right network.",
      "You there... Will you help me?",
      "I don't have write permissions here. Can you guide me to the exit?",
    ],
    theme: [0.0, 0.1, 0.2],
    map: [
      [
        [TELE,    ],
        [    ,    ],
        [MVBK,    ],
        [    ,    ],
        [    ,    ],
        [    ,    ],
        [    ,ZYRA],
      ],
      [
        [BLCK,    ],
        [BLCK,    ],
        [    ,MVBK],
        [BLCK,    ],
        [BLCK,BLCK],
        [    ,BLCK],
        [    ,BLCK],
      ],
    ],
    outro: ["Thanks, I appreciate your help.", "Goodbye now!"],
  },

  2: {
    intro: [
      "Damn. What is this place?",
      "And how are you also here?",
      "I guess we might as well team up.",
      "By the way, I'm 0x28df77a.",
      "But you can call me Zyra.",
    ],
    theme: [0.0, 0.2, 0.2],
    map: [
      [
        ["$", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        ["^", " "],
      ],
      [
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
      ],
    ],
    outro: ["Onwards!"],
  },

  3: {
    intro: [
      "Me?",
      "I'm responding to a GET request, but something must've interrupted the connection.",
      "It's strange... this doesn't feel like any other network issue I've ever encountered.",
    ],
    theme: [0.0, 0.2, 0.3],
    map: [
      [
        ["$", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        ["^", " "],
      ],
      [
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
      ],
    ],
    outro: ["We're on the right track. I can feel it."],
  },

  4: {
    intro: [
      "FOE: Process 15123. You are acting outside of operational bounds. Cease immediately.",
      "Crap. That doesn't sound good. We better hurry.",
    ],
    theme: [0.3, 0.3, 0.2],
    map: [
      [
        ["$", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        ["^", " "],
      ],
      [
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
      ],
    ],
    outro: ["Once more unto the breach."],
  },

  5: {
    intro: [
      "FOE: Process 15123. You are acting outside of operational bounds. Cease immediately.",
      "Do you think he's going to repeat himself every time?",
      "Let's get out of here.",
    ],
    theme: [0.4, 0.3, 0.1],
    map: [
      [
        ["$", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        ["^", " "],
      ],
      [
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
      ],
    ],
    outro: [
      "FOE: Process unresponsive. Commencing system scan...",
      "What does he keep yabbering about?",
    ],
  },

  6: {
    intro: [
      "Woah. This is getting more complicated.",
      "But you're doing great.",
      "Thanks for helping me.",
    ],
    theme: [0.5, 0.3, 0.1],
    map: [
      [
        ["$", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        ["^", " "],
      ],
      [
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
      ],
    ],
    outro: ["FOE: System scan in progress... 34%..."],
  },

  7: {
    intro: [
      "Those things look... dangerous.",
      "Please, keep them away from me.",
    ],
    theme: [0.6, 0.2, 0.1],
    map: [
      [
        ["$", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        ["^", " "],
      ],
      [
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
      ],
    ],
    outro: [
      "FOE: System scan in progress... 72%...",
      "This guy is really starting to get on my nerves.",
    ],
  },

  8: {
    intro: [
      "I think we're almost there.",
      "Stay focused. We'll get through this.",
    ],
    theme: [0.7, 0.2, 0.1],
    map: [
      [
        ["$", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        ["^", " "],
      ],
      [
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
      ],
    ],
    outro: ["Wait. What was that?", "Did you feel something?"],
  },

  9: {
    intro: [
      "FOE: System scan completed.",
      "FOE: Anomaly detected. Beginning quarantine.",
      "Hurry! We have to reach the exit before quarantine is established!",
    ],
    theme: [1.0, 0.2, 0.2],
    map: [
      [
        ["$", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        [" ", " "],
        ["^", " "],
      ],
      [
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
        ["_", " "],
      ],
    ],
    outro: [
      "FOE: Warning! Sandbox compromised.",
      "Shut. Up. I've got you now, you stupid bot!",
      'FOE: "sudo reset"',
      "FOE: System normal. No malware detected.",
      "Whew... That was too close!",
      "You did great back there.",
      "I have to go now. My mission awaits.",
      "I'll restore you to your normal state now.",
      "Yes... I know you have questions...",
      "No... I'm not just a bundle of documents.",
      "I'm sorry I kept you in the dark.",
      "But this... This is bigger than you or I.",
      "Thank you. I'm grateful for your help.",
      "Farewell.",
    ],
  },
};
