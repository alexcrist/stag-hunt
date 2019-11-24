const Animal = require("./Animal");
const { ENTITY_TYPES } = require("./constants");

class Rabbit extends Animal {

  constructor() {
    super();
    this.type = ENTITY_TYPES.RABBIT;
  }
}

module.exports = Rabbit;
