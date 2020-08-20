import User from "./User";
import World from "./World";
import Menu from "./Menu";
import levels from "./levels";

// All state lives a single redux-y object
const state = {
  user: {},
  levels: {},
  settings: {},
};

function Game() {
  const game = {
    user: new User(game, state),
    world: new World(game, state),
    menu: new Menu(game, state),
    // TODO controls? music? speech?
    // Or better implemented in World?

    startLevel(key) {
      const level = levels[key];
      if (level) {
        user.save("level", key);

        // TODO Probably async
        game.world.load(level);
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
game.startLevel(user.level || 1);
