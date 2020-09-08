// Zyra
export const ZYR = 0;

// Teleporters (exit, A, B, C, D)
export const TLX = 1;
export const TLA = 2;
export const TLB = 3;
export const TLC = 4;
export const TLD = 5;

// Block, movable block
export const ___ = 6;
export const __M = 7;

// Eye enemy and patrol points
export const EYE = 8;
export const EY1 = 9;
export const EY2 = 10;
export const EY3 = 11;
export const EY4 = 12;

// Seeker Eye
export const SEY = 13;

// Laser (oriented X or Z)
// export const LSX = 14;
// export const LSZ = 15;

// Gate / gatekeeper boss
// export const GAT = 16;

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
    ],
  },

  5: {
    intro: [
      "Well, this escalated quickly.",
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
    outro: ["FOE: System scan in progress... 42%..."],
  },

  6: {
    intro: [
      "I think we're almost there.",
      "Stay focused. We'll get through this.",
    ],
    theme: [0.6, 0.2, 0.1],
    map: [
      [
        [TLA,   ,EY1,   ,EY2,   ,TLB],
        [   ,   ,EYE,   ,   ,   ,   ],
        [   ,   ,EY4,   ,EY3,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
      ],
      [
        [___,___,___,   ,___,___,___],
        [___,   ,___,___,___,TLB,___],
        [___,___,___,   ,___,   ,___],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [EY3,   ,EY4,   ,   ,   ,   ],
        [   ,TLC,EYE,   ,   ,   ,   ],
        [EY2,   ,EY1,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
      ],
      [
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,___,   ],
        [   ,   ,   ,   ,   ,___,   ],
        [   ,__M,   ,   ,   ,__M,   ],
        [   ,___,   ,   ,   ,TLC,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,___,   ,   ,   ,TLD,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,TLD,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,TLX,   ],
        [   ,   ,   ,   ,   ,   ,   ],
      ],
      [
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,TLA,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,EY2,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,___,   ],
        [   ,EYE,   ,   ,   ,___,   ],
        [   ,   ,   ,   ,   ,___,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,___,   ],
        [   ,EY1,   ,   ,   ,___,   ],
        [   ,   ,   ,   ,   ,___,   ],
        [   ,ZYR,   ,   ,   ,   ,   ],
      ],
      [
        [___,___,___,   ,   ,   ,   ],
        [___,___,___,   ,   ,   ,   ],
        [___,___,___,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,__M,   ,   ,   ,   ,   ],
        [   ,___,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,___,   ,   ,   ,   ,   ],
        [   ,__M,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,___,   ,   ,   ,   ,   ],
        [___,___,___,   ,   ,   ,   ],
      ]
    ],
    outro: [
      "FOE: System scan in progress... 89%...",
    ],
  },

  7: {
    intro: [
      "FOE: Anomaly detected. Beginning quarantine.",
      "Hurry! We have to reach the exit before quarantine!",
    ],
    theme: [0.7, 0.2, 0.1],
    map: [
      [
        [   ,   ,TLD,   ,TLX,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
      ],
      [
        [   ,   ,___,___,___,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
      ],
      [],
      [
        [TLA,   ,   ,   ,   ,   ,TLC],
        [   ,SEY,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [TLB,   ,   ,   ,   ,   ,SEY],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,ZYR,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ],
        [TLA,   ,   ,   ,   ,   ,SEY],
        [   ,   ,   ,   ,   ,   ,   ],
        [   ,SEY,   ,   ,   ,   ,   ],
        [TLB,   ,   ,TLC,   ,   ,TLD],
      ],
      [
        [___,___,___,___,___,___,___],
        [___,   ,   ,___,   ,   ,___],
        [___,   ,   ,___,   ,   ,___],
        [___,___,___,___,___,___,___],
        [___,   ,   ,___,   ,   ,___],
        [___,   ,   ,___,   ,   ,___],
        [___,___,___,___,___,___,___],
        [___,   ,   ,___,   ,   ,___],
        [___,   ,   ,___,   ,   ,___],
        [___,___,___,___,___,___,___],
        [___,   ,   ,___,   ,   ,___],
        [___,   ,   ,___,   ,   ,___],
        [___,___,___,___,___,___,___],
      ],
    ],
    outro: [
      "Let's go!"
    ],
  },

  8: {
    intro: [
      "Whew... That was too close!",
      "FOE: Warning. Sandbox compromised.",
      "Shut. Up. Finally, I can take care of this annoyance.",
      'FOE: "sudo guardian reset"',
      "FOE: Guardian system rebooting...",
    ],
    theme: [0, 0, 0],
    map: [
      [
        [___,   ,   ,   ,___],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
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
        [___,   ,TLX,   ,___],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [___,   ,   ,   ,___],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,ZYR],
      ],
      [
        [___,   ,___,   ,___],
        [   ,   ,___,   ,   ],
        [   ,   ,___,   ,   ],
        [   ,   ,___,   ,   ],
        [___,   ,___,   ,___],
        [   ,   ,___,   ,   ],
        [   ,   ,___,   ,   ],
        [   ,   ,___,   ,   ],
        [___,   ,___,   ,___],
        [   ,   ,___,   ,   ],
        [   ,   ,___,   ,   ],
        [   ,   ,___,   ,   ],
        [___,___,___,___,___],
        [___,   ,   ,   ,___],
        [___,   ,___,   ,___],
        [___,   ,   ,   ,___],
        [___,___,___,___,___],
      ],
    ],
    outro: [
      "FOE: System normal. No malware detected.",
      "Hey, you did great back there.",
      "Thanks again.",
      "I have to go now... My mission awaits.",
      "I'll restore you back to normal, process 15127.",
      "Yes... I know you have questions...",
      "No... I'm not just a bundle of documents.",
      "I'm sorry I kept you in the dark.",
      "But this... This is bigger than you or I.",
      "Thank you. I'm grateful for your help.",
      "Farewell.",
    ],
  },
};
