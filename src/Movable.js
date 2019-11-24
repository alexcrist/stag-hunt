class Movable {

  constructor(
    xPosition = 0,
    yPosition = 0,
    speed = 1
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
    this.postion = {
      x: this.position.x + (this.speed * this.direction.x),
      y: this.position.y + (this.speed * this.direction.y),
    };
  }
}

module.exports = Movable;
