// Zyra
export const ZYR = 0;

// Teleporters (exit, A, B, C)
export const TLX = 1;
export const TLA = 2;
export const TLB = 3;
export const TLC = 4;

// Block, movable block
export const ___ = 5;
export const __M = 6;

// Eye enemy and patrol points
export const EYE = 7;
export const EY1 = 8;
export const EY2 = 9;
export const EY3 = 10;
export const EY4 = 11;

// Laser (oriented X or Z)
// export const LSX = 12;
// export const LSZ = 13;

// Seeker Eye
// export const SEY = 14;

// Gate / gatekeeper boss
// export const GAT = 15;

// Export object for flexible naming
// prettier-ignore
export const levels = {
  1: {
    intro: [
      "Ouch... Where am I?",
      "This isn't the right network.",
      "You there... Will you help me?",
      "I don't have write permissions here.",
      "Can you guide me to the exit?",
    ],
    theme: [0.0, 0.1, 0.2],
    map: [
      [
        [TLX,   ],
        [   ,   ],
        [   ,   ],
        [   ,   ],
        [   ,   ],
        [   ,   ],
        [   ,ZYR],
      ],
      [
        [___,   ],
        [___,   ],
        [   ,__M],
        [___,   ],
        [___,___],
        [   ,___],
        [   ,___],
      ],
    ],
    outro: ["Thanks, I appreciate your help.", "Goodbye now!"],
  },

  2: {
    intro: [
      "Damn. What is this place?",
      "And how are you still here?",
      "I guess we might as well team up.",
      "By the way, I'm 0x28df77a.",
      "But you can call me Zyra.",
    ],
    theme: [0.0, 0.2, 0.2],
    map: [
      [
        [TLX,   ,   ,   ],
        [   ,   ,   ,TLA],
        [   ,   ,   ,   ],
        [   ,   ,   ,   ],
        [   ,   ,   ,   ],
        [   ,   ,   ,   ],
        [ZYR,   ,   ,TLA],
      ],
      [
        [___,   ,   ,   ],
        [___,   ,___,___],
        [   ,   ,   ,   ],
        [__M,   ,   ,   ],
        [___,   ,___,___],
        [___,   ,   ,   ],
        [___,   ,   ,___],
      ],
    ],
    outro: [
      "Me? I was responding to a GET request.",
      "Something must have interrupted the connection.",
      "Though this doesn't feel like a network issue...",
      "Anyways, let's keep moving."
    ],
  },

  3: {
    intro: [
      "FOE: Process 15127. You have deviated from normal operations.",
      "FOE: Cease immediately and submit to inspection.",
      "Crap. That doesn't sound good.",
      "We better hurry.",
    ],
    theme: [0.4, 0.4, 0.2],
    map: [
      [
        [TLX,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,TLA,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,TLB,   ],
        [TLB,   ,   ,   ,   ],
      ],
      [
        [___,   ,   ,   ,TLA],
        [___,   ,   ,__M,   ],
        [___,   ,   ,   ,   ],
        [___,   ,   ,___,   ],
        [   ,   ,   ,___,   ],
        [___,   ,   ,___,   ],
        [___,   ,   ,ZYR,   ],
      ],
      [
        [   ,   ,   ,   ,___],
        [   ,   ,   ,   ,___],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,__M,   ],
        [   ,   ,   ,__M,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,___,___],
      ],
    ],
    outro: ["Once more unto the breach."],
  },

  4: {
    intro: [
      "FOE: Process 15127. You have deviated from normal operations.",
      "FOE: Cease immediately and submit to inspection.",
      "Do you think he's going to repeat himself every time?",
      "Let's get out of here.",
    ],
    theme: [0.5, 0.5, 0.1],
    map: [
      [
        [TLX,   ,   ,   ,   ],
        [EY2,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [EYE,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [EY1,   ,TLC,   ,   ],
      ],
      [
        [___,   ,   ,   ,   ],
        [___,   ,   ,   ,   ],
        [___,   ,   ,   ,   ],
        [___,TLC,   ,   ,   ],
        [___,   ,   ,   ,   ],
        [___,   ,   ,   ,   ],
        [___,   ,   ,ZYR,   ],
        [___,   ,   ,   ,   ],
        [___,___,___,__M,   ],
      ],
      [
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,___,   ,   ,   ],
        [   ,___,   ,___,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,___,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,__M,   ],
      ],
    ],
    outro: [
      "FOE: Process unresponsive. Commencing system scan...",
      "What does he keep yabbering about?",
    ],
  },

  5: {
    intro: [
      "Woah. This is getting more complicated.",
      "But you're doing great.",
      "Thanks for helping me.",
    ],
    theme: [0.5, 0.3, 0.1],
    map: [
      [
        [TLC,EY1,EYE,EY4,TLX],
        [   ,EY2,   ,EY3,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
      ],
      [
        [___,___,___,___,___],
        [   ,   ,___,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [TLB,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [TLA,   ,   ,   ,   ],
      ],
      [
        [   ,   ,   ,   ,   ],
        [   ,EY3,   ,EY4,   ],
        [   ,TLA,   ,   ,   ],
        [   ,   ,   ,TLB,   ],
        [   ,   ,   ,EYE,   ],
        [___,   ,   ,   ,   ],
        [___,   ,   ,   ,   ],
        [___,   ,   ,   ,   ],
        [___,EY2,   ,EY1,   ],
        [___,ZYR,   ,   ,TLC],
      ],
      [
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,___,   ,   ,   ],
        [   ,   ,   ,___,   ],
        [   ,___,   ,   ,   ],
        [   ,   ,   ,___,   ],
        [   ,___,   ,   ,   ],
        [   ,   ,   ,___,   ],
        [   ,___,   ,   ,   ],
        [   ,__M,   ,___,___],
      ],
    ],
    outro: ["FOE: System scan in progress... 34%..."],
  },

  6: {
    intro: [
      "Those things look... dangerous.",
      "Please, keep them away from me.",
    ],
    theme: [0.6, 0.2, 0.1],
    map: [
      [
        [TLX,   ],
        [   ,   ],
        [   ,   ],
        [   ,   ],
        [   ,   ],
        [   ,   ],
        [ZYR,   ],
      ],
      [
        [___,   ],
        [___,   ],
        [___,   ],
        [___,   ],
        [___,   ],
        [___,   ],
        [___,   ],
      ],
    ],
    outro: [
      "FOE: System scan in progress... 72%...",
    ],
  },

  7: {
    intro: [
      "I think we're almost there.",
      "Stay focused. We'll get through this.",
    ],
    theme: [0.7, 0.2, 0.1],
    map: [
      [
        [TLX,   ],
        [   ,   ],
        [   ,   ],
        [   ,   ],
        [   ,   ],
        [   ,   ],
        [ZYR,   ],
      ],
      [
        [___,   ],
        [___,   ],
        [___,   ],
        [___,   ],
        [___,   ],
        [___,   ],
        [___,   ],
      ],
    ],
    outro: ["Wait. What was that?", "Did you feel something too?"],
  },

  8: {
    intro: [
      "FOE: System scan completed.",
      "FOE: Anomaly detected. Beginning quarantine.",
      "Hurry! We have to reach the exit before quarantine!",
    ],
    theme: [1.0, 0.2, 0.2],
    map: [
      [
        [TLX,   ],
        [   ,   ],
        [   ,   ],
        [   ,   ],
        [   ,   ],
        [   ,   ],
        [ZYR,   ],
      ],
      [
        [___,   ],
        [___,   ],
        [___,   ],
        [___,   ],
        [___,   ],
        [___,   ],
        [___,   ],
      ],
    ],
    outro: [
      "FOE: Warning! Sandbox compromised.",
      "Shut. Up. I've got you now, you stupid script!",
      'FOE: "sudo guardian reset"',
      "FOE: System normal. No malware detected.",
      "Whew... That was too close!",
      "You did great back there.",
      "I have to go now... My mission awaits.",
      "I'll restore you to your normal self, process 15127.",
      "Yes... I know you have questions...",
      "No... I'm not just a bundle of documents.",
      "I'm sorry I kept you in the dark.",
      "But this... This is bigger than you or I.",
      "Thank you. I'm grateful for your help.",
      "Farewell.",
    ],
  },
};
