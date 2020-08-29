import World from "./game/World";
import { initDebug } from "./game/debug";

const world = new World();
world.loadLevel(1);

initDebug(world);
