const WORLD_BOUNDS = {
  TOP: 0,
  BOTTOM: 700,
  LEFT: 0,
  RIGHT: 1400,
};

const ENTITY_TYPES = {
  PLAYER: "player",
  RABBIT: "rabbit",
  STAG: "stag"
};

const SOCKET = {
  EVENT: "event",
  WORLD_STATE: "worldstate",
  CONNECTION: "connection",
  DISCONNECT: "disconnect",
};

const SERVER = {
  PORT: 3000,
};

const RENDER = {
  REFRESH_INTERVAL: 10
};

const CLIENT_ACTIONS = {
  KEY_UP: "keyup",
  KEY_DOWN: "keydown",
};

const POSITIONS = {
  DEFAULT_X: 500,
  DEFAULT_Y: 500
};

const SPEEDS = {
  DEFAULT: 1,
  PLAYER: 6,
  RABBIT: 3,
  STAG: 8
};

module.exports = {
  WORLD_BOUNDS,
  ENTITY_TYPES,
  SOCKET,
  SERVER,
  RENDER,
  CLIENT_ACTIONS,
  POSITIONS,
  SPEEDS
};
