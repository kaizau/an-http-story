const level1 = {
  intro: [
    "Uh... Where am I? Where are the others?",
    "Oh no! I have to get to the client before the request expires.",
    "You there! Please help me!",
    "I don't have write permissions here. Can you move that block?",
  ],
  theme: "dark",
  music: "main",
  floor: [
    ["X", " "],
    ["_", " "],
    [" ", "m"],
    ["_", " "],
    ["_", "_"],
    [" ", "_"],
    [" ", "S"],
  ],
  outro: [
    "Thanks!"
  ]
};

const level2 = {
};

// Export object for flexible naming
export default { 1: level1, 2: level2 };
