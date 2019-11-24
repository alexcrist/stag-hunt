const Animal = require("./Animal");
const { ENTITY_TYPES, SPEEDS, ANIMAL_RUN_DISTANCE } = require("./constants");

class Rabbit extends Animal {

  constructor() {
    super();
    this.type = ENTITY_TYPES.RABBIT;
    this.speed = SPEEDS.RABBIT;
    this.animalRunDistance = ANIMAL_RUN_DISTANCE.RABBIT;
  }
}

module.exports = Rabbit;
