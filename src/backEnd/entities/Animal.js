import vector from "../../shared/vector";
import Movable from "./Movable";
import { getPhantomPosition } from "../util";
import { ENTITY_TYPES, WORLD_BOUNDS } from "../../shared/constants";

export default class Animal extends Movable {

  constructor(args) {
    super(args);
    this.position = {
      x: Math.random() * WORLD_BOUNDS.RIGHT,
      y: Math.random() * WORLD_BOUNDS.BOTTOM
    };
  }

  update(worldState) {
    super.update();

    const playerPositions = worldState.entities
      .filter(entity => entity.type === ENTITY_TYPES.PLAYER)
      .map(player => player.position)
      .map(getPhantomPosition(this.position))
      .filter(playerPosition => (
        vector.distance(playerPosition, this.position) < this.animalRunDistance
      ));

    if (playerPositions.length === 0) {
      this.direction = { x: 0, y: 0 };
      return;
    }

    let newDirection = { x: 0, y: 0 };
    for (const position of playerPositions) {
      const distance = vector.distance(this.position, position);
      const multiplier = distance === 0
        ? 1
        : 1 / distance;
      const difference = vector.difference(this.position, position);

      newDirection = vector.add(
        newDirection,
        vector.scale(difference, multiplier)
      );
    }

    newDirection = vector.normalize(newDirection);
    this.direction = newDirection;
  };
}
