import State from "./game/State";
import User from "./game/User";
import World from "./game/World";
import Menu from "./game/Menu";
import levels from "./game/levels";

// All state lives a single redux-y object
const state = {
  user: new State(),
  levels: new State(),
  settings: new State(),
};

// DEBUG
window.state = state;

function Game() {
  // Must use var to avoid lexical declaration ReferenceError
  // eslint-disable-next-line no-var
  var game = {
    user: new User(game, state),
    world: new World(game, state),
    menu: new Menu(game, state),
    // TODO controls? music? speech?
    // Or better implemented in World?

    startLevel(key) {
      const level = levels[key];
      if (level) {
        game.user.save("level", key);

        // TODO Probably async
        // game.world.load(level);
      } else {
        throw new Error(`Invalid level selected: ${key}`);
      }
    },

    finishLevel(key, progress) {
      // TODO Save and display user progress
    },
  };

  return game;
}

const game = new Game();
game.startLevel(state.user.level || 1);
