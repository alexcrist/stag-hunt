const uuid = require("uuid/v4");
const Movable = require("./Movable");
const { ENTITY_TYPES, SPEEDS } = require("./constants");

class Player extends Movable {

  constructor() {
    super();
    this.id = uuid().slice(0, 7);
    this.type = ENTITY_TYPES.PLAYER;
    this.speed = SPEEDS.PLAYER;
    this.color = "rgb("
      + Math.round(Math.random() * 256).toString() + ", "
      + Math.round(Math.random() * 256).toString() + ", "
      + Math.round(Math.random() * 256).toString()
      + ")";
  }

  handleKeyDown = (key) => {
    switch (key.toLowerCase()) {
      case "w":
        this.direction = { x: 0, y: -1 };
        break;

      case "a":
        this.direction = { x: -1, y: 0 };
        break;

      case "s":
        this.direction = { x: 0, y: 1 };
        break;

      case "d":
        this.direction = { x: 1, y: 0 };
        break;
    }
  }

  handleKeyUp = (key) => {
    switch (key.toLowerCase()) {
      case "w":
        if (this.direction.x === 0 && this.direction.y === -1) {
          this.direction = { x: 0, y: 0 };
        }
        break;

      case "a":
        if (this.direction.x === -1 && this.direction.y === 0) {
          this.direction = { x: 0, y: 0 };
        }
        break;

      case "s":
        if (this.direction.x === 0 && this.direction.y === 1) {
          this.direction = { x: 0, y: 0 };
        }
        break;

      case "d":
        if (this.direction.x === 1 && this.direction.y === 0) {
          this.direction = { x: 0, y: 0 };
        }
        break;
    }
  }
}

module.exports = Player;
