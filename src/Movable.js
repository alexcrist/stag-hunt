class Movable {

  constructor(
    xPosition = 500,
    yPosition = 500,
    speed = 10
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

  update = () => {
    this.position = {
      x: this.position.x + (this.speed * this.direction.x),
      y: this.position.y + (this.speed * this.direction.y),
    };
  }
}

module.exports = Movable;
