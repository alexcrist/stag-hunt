const uuid = require("uuid/v4");

const ACTIONS = {
  STILL: "still",
  UP: "up",
  RIGHT: "right",
  DOWN: "down",
  LEFT: "left"
};

class Player {

  constructor() {
    this.id = uuid().slice(0, 7);
    this.currentAction = ACTIONS.STILL;
    this.position = {
      x: 0,
      y: 0
    };
  }

  handleKeyDown = (key) => {
    switch (key.toLowerCase()) {
      case "w":
        this.currentAction = ACTIONS.UP;
        break;

      case "a":
        this.currentAction = ACTIONS.LEFT;
        break;

      case "s":
        this.currentAction = ACTIONS.DOWN;
        break;

      case "d":
        this.currentAction = ACTIONS.RIGHT;
        break;
    }
  }

  handleKeyUp = (key) => {
    switch (key.toLowerCase()) {
      case "w":
        if (this.currentAction === ACTIONS.UP) {
          this.currentAction = ACTIONS.STILL;
        }
        break;

      case "a":
        if (this.currentAction === ACTIONS.LEFT) {
          this.currentAction = ACTIONS.STILL;
        }
        break;

      case "s":
        if (this.currentAction === ACTIONS.DOWN) {
          this.currentAction = ACTIONS.STILL;
        }
        break;

      case "d":
        if (this.currentAction === ACTIONS.RIGHT) {
          this.currentAction = ACTIONS.STILL;
        }
        break;
    }
  }
}

module.exports = Player;
