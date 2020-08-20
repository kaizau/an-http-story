import State from "./game/State";
import User from "./game/User";
import World from "./game/World";
import Menu from "./game/Menu";
import levels from "./game/levels";

// All state lives in a single object, each key extending EventTarget
const state = {
  user: new State(),
  levels: new State(),
  settings: new State(),
};

class Game {
  constructor() {
    this.state = state;
  }

  async init() {
    game.user = new User(game);
    game.world = new World(game);
    game.menu = new Menu(game);

    // TODO
    // game.music
    // game.speech
    // game.controls
    // Or are these better implemented in World?

    await game.world.ready;
  }

  async startLevel(key) {
    const level = levels[key];
    if (level) {
      game.user.save("level", key);
      // game.world.load(level);
    } else {
      throw new Error(`Invalid level selected: ${key}`);
    }
  }

  finishLevel(key, progress) {
    // TODO Save and display user progress
  }
}

const game = new Game();
game.init().then(() => {
  game.startLevel(state.user.level || 1);
});

// DEBUG
window.game = game;
window.state = state;
