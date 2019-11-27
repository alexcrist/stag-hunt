import Animal from "./Animal";
import {
  ENTITY_TYPES,
  SPEEDS,
  ANIMAL_RUN_DISTANCE
} from "../../shared/constants";

export default class Rabbit extends Animal {

  constructor() {
    super();
    this.type = ENTITY_TYPES.RABBIT;
    this.speed = SPEEDS.RABBIT;
    this.animalRunDistance = ANIMAL_RUN_DISTANCE.RABBIT;
  }
}
