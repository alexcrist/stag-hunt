const WORLD_BOUNDS = {
  TOP: 0,
  BOTTOM: 1000,
  LEFT: 0,
  RIGHT: 1000,
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

module.exports = {
  WORLD_BOUNDS,
  ENTITY_TYPES,
  SOCKET,
  SERVER,
  RENDER,
  CLIENT_ACTIONS
};
