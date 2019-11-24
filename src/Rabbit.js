const Movable = require("./Movable");
const { ENTITY_TYPES } = require("./constants");

class Rabbit extends Movable {

  constructor() {
    super();
    this.type = ENTITY_TYPES.RABBIT;
  }

  update() {

  }
}

module.exports = Rabbit;
