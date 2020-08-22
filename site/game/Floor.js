const { MeshBuilder } = BABYLON;

export default class FloorFactory {
  constructor(scene) {
    this.scene = scene;
  }

  createTile() {
    const tile = MeshBuilder.CreateBox("tile", {
      height: 0.5,
      width: 10,
      depth: 2,
    });
    tile.position.y = -0.5;
    tile.receiveShadows = true;
    return tile;
  }
}
