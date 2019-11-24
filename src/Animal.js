const Movable = require("./Movable");
const vector = require("./vector");
const { ENTITY_TYPES } = require("./constants");

class Animal extends Movable {

  constructor(args) {
    super(args);
  }

  update = (worldState) => {
    super.update();

    const playerPositions = worldState.entities
      .filter(entity => entity.type === ENTITY_TYPES.PLAYER)
      .map(player => player.position)
      .map(vector.getTransformedPosition(this.position));

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
