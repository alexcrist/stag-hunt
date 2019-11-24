const Animal = require("./Animal");
const { ENTITY_TYPES, SPEEDS } = require("./constants");

class Stag extends Animal {

  constructor() {
    super();
    this.type = ENTITY_TYPES.STAG;
    this.speed = SPEEDS.STAG;
  }
}

module.exports = Stag;
