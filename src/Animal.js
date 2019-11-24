const Movable = require("./Movable");
const vector = require("./vector");
const { ENTITY_TYPES, WORLD_BOUNDS } = require("./constants");
const { getPhantomPosition } = require("./util");

class Animal extends Movable {

  constructor(args) {
    super(args);
    this.position = {
      x: Math.random() * WORLD_BOUNDS.RIGHT,
      y: Math.random() * WORLD_BOUNDS.BOTTOM
    };
  }

  update = (worldState) => {
    super.update();

    const playerPositions = worldState.entities
      .filter(entity => entity.type === ENTITY_TYPES.PLAYER)
      .map(player => player.position)
      .map(getPhantomPosition(this.position));

    const closestDistance = playerPositions.reduce((closest, position) => {
      const distance = vector.distance(this.position, position);
      if (distance < closest) {
        return distance;
      }
      return closest;
    }, 1000);

    if (closestDistance > 500) {
      this.direction = { x: 0, y: 0 };
      return;
    }

    let newDirection = { x: 0, y: 0 };
    for (const position of playerPositions) {
      const distance = vector.distance(this.position, position);
      const multiplier = distance === 0
        ? 1
        : 1 / distance;
      const difference = vector.difference(this.position, position);

      newDirection = vector.add(
        newDirection,
        vector.scale(difference, multiplier)
      );
    }

    newDirection = vector.normalize(newDirection);
    this.direction = newDirection;
  };
}

module.exports = Animal;
