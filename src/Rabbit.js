const Animal = require("./Animal");
const { ENTITY_TYPES, SPEEDS } = require("./constants");

class Rabbit extends Animal {

  constructor() {
    super();
    this.type = ENTITY_TYPES.RABBIT;
    this.speed = SPEEDS.RABBIT;
  }
}

module.exports = Rabbit;
