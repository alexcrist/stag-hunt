const _ = require("lodash");

const normalize = vector => {
  const size = magnitude(vector);
  if (size !== 0) {
    return scale(vector, 1 / size);
  }
  return vector;
};

const difference = (vector1, vector2) => {
  const x = vector1.x - vector2.x;
  const y = vector1.y - vector2.y;
  return { x, y };
};

const add = (vector1, vector2) => {
  const x = vector1.x + vector2.x;
  const y = vector1.y + vector2.y;
  return { x, y };
};

const magnitude = vector => {
  const { x, y } = vector;
  return Math.sqrt(x * x + y * y);
};

const scale = (vector, size) => {
  const x = vector.x * size;
  const y = vector.y * size;
  return { x, y };
};

const distance = (vector1, vector2) => {
  return magnitude(difference(vector1, vector2));
};

const getTransformedPosition = position => otherPosition => {
  const wrappedPositionMultipliers = [[1, 1], [-1, 1], [1, -1], [-1, -1]];
  const otherPositions = wrappedPositionMultipliers.map(([x, y]) => ({
    x: x * otherPosition.x,
    y: y * otherPosition.y
  }));
  const a = _.minBy(
    otherPositions,
    transformedPosition => distance(position, transformedPosition)
  );
  return a;
};

module.exports = {
  normalize,
  difference,
  magnitude,
  add,
  distance,
  getTransformedPosition,
  scale
};
