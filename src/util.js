const _ = require("lodash");

const vector = require("./vector");
const { WORLD_BOUNDS } = require("./constants");

const getPhantomPosition = position => otherPosition => {
  const wrappedPositionMultipliers = [
    [0, 0],
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];
  const otherPositions = wrappedPositionMultipliers.map(([x, y]) => ({
    x: otherPosition.x + x * WORLD_BOUNDS.RIGHT,
    y: otherPosition.y + y * WORLD_BOUNDS.BOTTOM
  }));
  const a = _.minBy(
    otherPositions,
    transformedPosition => vector.distance(position, transformedPosition)
  );
  return a;
};

module.exports = {
  getPhantomPosition
};
