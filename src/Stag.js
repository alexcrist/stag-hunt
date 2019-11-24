const Animal = require("./Animal");
const { ENTITY_TYPES, SPEEDS, ANIMAL_RUN_DISTANCE } = require("./constants");

class Stag extends Animal {

  constructor() {
    super();
    this.type = ENTITY_TYPES.STAG;
    this.speed = SPEEDS.STAG;
    this.animalRunDistance = ANIMAL_RUN_DISTANCE.STAG;
  }
}

module.exports = Stag;
