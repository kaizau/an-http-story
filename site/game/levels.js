const level1 = {
  intro: [
    "Ouch... Where am I?",
    "Where are the others?",
    "I have to get to the client before the request expires!",
    "You there... Can you help me?",
    "I don't have write permissions here. Would you please move that block?",
  ],
  theme: "dark",
  music: "main",
  map: [
    [
      ["$", " "],
      [" ", " "],
      [" ", " "],
      [" ", " "],
      [" ", " "],
      [" ", " "],
      [" ", "^"],
    ],
    [
      ["_", " "],
      ["_", " "],
      [" ", "m"],
      ["_", " "],
      ["_", "_"],
      [" ", "_"],
      [" ", "_"],
    ],
  ],
  outro: [
    "Thanks for your help! Bye now!"
  ]
};

const level2 = {
  intro: [
    "Damn. There must be multiple containers.",
    "But at least you're still here. I guess we might as well team up.",
    "By the way, I'm 0x28db77.",
    "But you can call me Zyra.",
  ],
  theme: "emergency",
  music: "main",
  map: [
    [
      ["$", " "],
      [" ", " "],
      [" ", " "],
      [" ", " "],
      ["m", " "],
      [" ", " "],
      ["^", " "],
    ],
    [
      ["_", " "],
      ["_", " "],
      ["_", " "],
      ["_", " "],
      ["_", "_"],
      [" ", "_"],
      ["_", "_"],
    ],
  ],
  outro: [
    "Thanks!"
  ]
};

// Export object for flexible naming
export default { 1: level1, 2: level2 };
