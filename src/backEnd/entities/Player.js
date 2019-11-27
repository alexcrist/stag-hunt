import Movable from "./Movable";
import vector from "../../shared/vector";
import { ENTITY_TYPES, SPEEDS } from "../../shared/constants";

export default class Player extends Movable {

  constructor(id) {
    super();
    this.id = id;
    this.type = ENTITY_TYPES.PLAYER;
    this.speed = SPEEDS.PLAYER;
    this.color = "rgb("
      + Math.round(Math.random() * 256).toString() + ", "
      + Math.round(Math.random() * 256).toString() + ", "
      + Math.round(Math.random() * 256).toString()
      + ")";
  }

  handleKeyDown(key) {
    switch (key.toLowerCase()) {
      case "w":
        this.direction.y = -1;
        break;

      case "a":
        this.direction.x = -1;
        break;

      case "s":
        this.direction.y = 1;
        break;

      case "d":
        this.direction.x = 1;
        break;
    }
    this.direction = vector.normalize(this.direction);
  }

  handleKeyUp(key) {
    switch (key.toLowerCase()) {
      case "w":
        if (this.direction.y < 0) {
          this.direction.y = 0;
        }
        break;

      case "a":
        if (this.direction.x < 0) {
          this.direction.x = 0;
        }
        break;

      case "s":
        if (this.direction.y > 0) {
          this.direction.y = 0;
        }
        break;

      case "d":
        if (this.direction.x > 0) {
          this.direction.x = 0;
        }
        break;
    }
    this.direction = vector.normalize(this.direction);
  }
}
