import {
  ZYR,
  TLX,
  TLA,
  TLB,
  TLC,
  TLD,
  ___,
  __M,
  EYE,
  EY1,
  EY2,
  EY3,
  EY4,
  SEY,
} from "./meshes";

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
        [TLX    ],
        [       ],
        [       ],
        [       ],
        [       ],
        [       ],
        [       ],
        [   ,ZYR],
      ],
      [
        [___    ],
        [___    ],
        [__M    ],
        [___    ],
        [       ],
        [___,___],
        [   ,___],
        [   ,___],
      ],
    ],
    outro: ["Thanks for your help.", "Goodbye now!"],
  },

  2: {
    intro: [
      "Damn. Still the wrong address.",
      "But you're here too...",
      "I guess we might as well team up.",
      "By the way, I'm 0x28df77a.",
      "You can call me Zyra.",
    ],
    theme: [0.0, 0.2, 0.2],
    map: [
      [
        [TLX            ],
        [   ,   ,   ,TLA],
        [               ],
        [               ],
        [               ],
        [               ],
        [ZYR,   ,   ,TLA],
      ],
      [
        [___            ],
        [___,   ,___,___],
        [               ],
        [__M            ],
        [___,   ,___,___],
        [___            ],
        [___,   ,   ,___],
      ],
    ],
    outro: [
      "Me? I was responding to a GET request.",
      "Something must have interrupted the connection.",
      "Though this doesn't feel like a normal network issue...",
      "Anyways, let's keep moving."
    ],
  },

  3: {
    intro: [
      ">Process 15127. You have deviated from normal operations.",
      ">Cease immediately and submit to inspection.",
      "Well... That doesn't sound good.",
      "We better hurry.",
    ],
    theme: [0.4, 0.4, 0.2],
    map: [
      [
        [TLX                ],
        [                   ],
        [                   ],
        [   ,   ,   ,TLA    ],
        [                   ],
        [   ,   ,   ,TLB    ],
        [TLB                ],
      ],
      [
        [___,   ,   ,   ,TLA],
        [___,   ,   ,   ,__M],
        [___                ],
        [___,   ,   ,___    ],
        [                   ],
        [___,   ,   ,___    ],
        [___,   ,   ,ZYR    ],
      ],
      [
        [   ,   ,   ,   ,___],
        [   ,   ,   ,   ,___],
        [                   ],
        [   ,   ,   ,__M    ],
        [                   ],
        [   ,   ,   ,__M    ],
        [   ,   ,___,___,___],
      ],
    ],
    outro: ["Once more unto the breach."],
  },

  4: {
    intro: [
      ">Process 15127. You have deviated from normal operations.",
      ">Cease immediately and submit to inspection.",
      "Ugh. What I wouldn't give to shut him up...",
      "Let's get out of here.",
    ],
    theme: [0.5, 0.5, 0.1],
    map: [
      [
        [TLX                ],
        [EY2                ],
        [                   ],
        [                   ],
        [EYE                ],
        [                   ],
        [                   ],
        [                   ],
        [EY1,   ,   ,TLC    ],
      ],
      [
        [___,   ,   ,TLB    ],
        [___,TLC            ],
        [___,   ,   ,TLB    ],
        [___                ],
        [___                ],
        [___                ],
        [___                ],
        [___,   ,   ,ZYR    ],
        [__M,___,___,___    ],
      ],
      [
        [   ,   ,   ,___    ],
        [   ,___            ],
        [   ,___,   ,___    ],
        [                   ],
        [   ,   ,   ,___    ],
        [                   ],
        [   ,   ,   ,___    ],
        [   ,   ,   ,___    ],
        [   ,   ,   ,__M    ],
      ],
    ],
    outro: [
      ">Process unresponsive. Commencing system scan...",
    ],
  },

  5: {
    intro: [
      "These poor processes. No intelligence at all.",
      "Artificial or otherwise.",
      "Let's keep moving.",
    ],
    theme: [0.5, 0.3, 0.1],
    map: [
      [
        [TLC,EY1,EYE,EY4,TLX],
        [                   ],
        [   ,EY2,   ,EY3    ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
      ],
      [
        [___,___,   ,___,___],
        [   ,___,   ,___    ],
        [   ,___,___,___    ],
        [                   ],
        [                   ],
        [TLB                ],
        [                   ],
        [                   ],
        [                   ],
        [TLA                ],
      ],
      [
        [                   ],
        [                   ],
        [   ,EY3,   ,EY4    ],
        [   ,   ,   ,TLB    ],
        [   ,TLA,   ,EYE    ],
        [___                ],
        [___                ],
        [___                ],
        [___,EY2,   ,EY1    ],
        [___,ZYR,   ,   ,TLC],
      ],
      [
        [                   ],
        [                   ],
        [                   ],
        [   ,   ,   ,___    ],
        [   ,___            ],
        [   ,   ,   ,___    ],
        [   ,___            ],
        [   ,   ,   ,___    ],
        [   ,___            ],
        [   ,__M,   ,___,___],
      ],
    ],
    outro: [">System scan in progress... 42%..."],
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
        [   ,   ,EYE                ],
        [   ,   ,EY4,   ,EY3        ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
      ],
      [
        [___,   ,___,   ,___,___,___],
        [___,   ,___,___,___,TLB,___],
        [___,___,___,   ,___,   ,___],
        [                           ],
        [EY1,TLC,EY2                ],
        [                           ],
        [EYE,TLD                    ],
        [                           ],
        [EY4,TLC,EY3                ],
        [                           ],
        [                           ],
        [                           ],
      ],
      [
        [                           ],
        [   ,   ,   ,   ,   ,___    ],
        [   ,   ,   ,   ,   ,___    ],
        [   ,__M,   ,   ,   ,__M    ],
        [   ,___,   ,   ,   ,TLD    ],
        [                           ],
        [   ,___                    ],
        [                           ],
        [   ,___                    ],
        [                           ],
        [   ,   ,   ,   ,   ,TLX    ],
        [                           ],
      ],
      [
        [                           ],
        [   ,TLA                    ],
        [                           ],
        [   ,EY2                    ],
        [   ,   ,   ,   ,   ,___    ],
        [   ,EYE,   ,   ,   ,___    ],
        [   ,   ,   ,   ,   ,___    ],
        [   ,   ,   ,   ,   ,___    ],
        [   ,   ,   ,   ,   ,___    ],
        [   ,EY1,   ,   ,   ,___    ],
        [   ,   ,   ,   ,   ,___    ],
        [   ,ZYR                    ],
      ],
      [
        [___,___,___                ],
        [___,___,___                ],
        [___,___,___                ],
        [                           ],
        [   ,__M                    ],
        [   ,___                    ],
        [                           ],
        [   ,___                    ],
        [   ,__M                    ],
        [                           ],
        [   ,___                    ],
        [___,___,___                ],
      ]
    ],
    outro: [
      ">System scan in progress... 89%...",
    ],
  },

  7: {
    intro: [
      ">Anomaly detected. Beginning quarantine.",
      "Damn! Hurry!",
      "We have to reach the exit before quarantine!",
    ],
    theme: [0.7, 0.2, 0.1],
    map: [
      [
        [   ,   ,TLD,   ,TLX        ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
      ],
      [
        [   ,   ,___,___,___        ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
      ],
      [],
      [
        [TLA,SEY,   ,   ,   ,   ,TLC],
        [                           ],
        [                           ],
        [TLB,   ,   ,   ,   ,   ,SEY],
        [   ,   ,   ,ZYR            ],
        [TLA,   ,   ,   ,   ,   ,SEY],
        [                           ],
        [                           ],
        [TLB,SEY,   ,TLC,   ,   ,TLD],
      ],
      [
        [___,___,___,___,___,___,___],
        [___,   ,   ,___,   ,   ,___],
        [___,   ,   ,___,   ,   ,___],
        [___,___,___,___,___,___,___],
        [   ,   ,   ,__M            ],
        [___,___,___,___,___,___,___],
        [___,   ,   ,___,   ,   ,___],
        [___,   ,   ,___,   ,   ,___],
        [___,___,___,___,___,___,___],
      ],
    ],
  },

  8: {
    intro: [
      "Whew... That was too close!",
      ">Warning. Sandbox compromised.",
      "Shut. Up. Finally, I can take care of this annoyance.",
      '>"sudo guardian reset"',
      ">Guardian system rebooting...",
    ],
    theme: [0, 0, 0],
    map: [
      [
        [___,   ,   ,   ,___],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
      ],
      [
        [___,   ,TLX,   ,___],
        [                   ],
        [                   ],
        [                   ],
        [___,   ,   ,   ,___],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [   ,   ,   ,   ,ZYR],
      ],
      [
        [___,   ,___,   ,___],
        [   ,   ,___        ],
        [   ,   ,___        ],
        [   ,   ,___        ],
        [___,   ,___,   ,___],
        [   ,   ,___        ],
        [   ,   ,___        ],
        [   ,   ,___        ],
        [___,   ,___,   ,___],
        [   ,   ,___        ],
        [   ,   ,___        ],
        [   ,   ,___        ],
        [___,___,___,___,___],
        [   ,   ,   ,   ,___],
        [___,___,___,___,___],
        [___                ],
        [___,___,___,___,___],
      ],
    ],
    outro: [
      ">System normal. No malware detected.",
      "Hey, you did great back there.",
      "I have to go now... My mission awaits.",
      "I'll restore you back to normal, process 15127.",
      "Yes... I know you have questions...",
      "Ha! No... I'm not just a bundle of documents.",
      "I'm sorry, I can't say more than that.",
      "But this... This is bigger than you or I.",
      "Thank you. I'll always be grateful for your help.",
      "Farewell.",
    ],
  },
};
