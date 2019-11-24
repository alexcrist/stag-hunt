const { WORLD_BOUNDS } = require("./constants");

class Movable {

  constructor(
    xPosition = 500,
    yPosition = 500,
    speed = 6
  ) {
    this.position = {
      x: xPosition,
      y: yPosition,
    };
    this.direction = {
      x: 0,
      y: 0,
    };
    this.speed = speed;
  }

  update() {
    let xPosition = this.position.x + (this.speed * this.direction.x);
    let yPosition = this.position.y + (this.speed * this.direction.y);

    if (xPosition < WORLD_BOUNDS.LEFT) {
      xPosition = WORLD_BOUNDS.RIGHT + xPosition;
    } else if (xPosition > WORLD_BOUNDS.RIGHT) {
      xPosition = WORLD_BOUNDS.LEFT + xPosition - WORLD_BOUNDS.RIGHT;
    }

    if (yPosition > WORLD_BOUNDS.BOTTOM) {
      yPosition = WORLD_BOUNDS.TOP + yPosition - WORLD_BOUNDS.BOTTOM;
    } else if (yPosition < WORLD_BOUNDS.TOP) {
      yPosition = WORLD_BOUNDS.BOTTOM + yPosition;
    }

    this.position = {
      x: xPosition,
      y: yPosition,
    };
  }
}

module.exports = Movable;
