import Animal from "./Animal";
import {
  ENTITY_TYPES,
  SPEEDS,
  ANIMAL_RUN_DISTANCE
} from "../../shared/constants";

export default class Stag extends Animal {

  constructor() {
    super();
    this.type = ENTITY_TYPES.STAG;
    this.speed = SPEEDS.STAG;
    this.animalRunDistance = ANIMAL_RUN_DISTANCE.STAG;
  }
}
