const Animal = require("./Animal");
const { ENTITY_TYPES } = require("./constants");

class Stag extends Animal {

  constructor() {
    super();
    this.type = ENTITY_TYPES.STAG;
    this.speed = 8;
  }
}

module.exports = Stag;
