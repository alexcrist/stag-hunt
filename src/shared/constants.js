// Shared constants (front + back end) ==========

export const ENTITY_TYPES = {
  PLAYER: "player",
  RABBIT: "rabbit",
  STAG: "stag"
};

export const SOCKET_EVENTS = {
  EVENT: "event",
  CONNECTION: "connection",
  DISCONNECT: "disconnect",
  WORLD_STATE: "world_state",
  CLIENT_ACTION: "client_action"
};

export const CLIENT_ACTIONS = {
  KEY_UP: "keyup",
  KEY_DOWN: "keydown",
};

export const WORLD_SIZE = {
  WIDTH: 1400,
  HEIGHT: 700,
};

export const ENTITY_SIZES = {
  PLAYER: 5,
  RABBIT: 3,
  STAG: 15
};

// Back end constants ===========================

export const SERVER = {
  PORT: 3000,
};

export const RENDER = {
  REFRESH_INTERVAL: 10
};

export const ANIMAL_RUN_DISTANCE = {
  RABBIT: 50,
  STAG: 100
};

export const POSITIONS = {
  DEFAULT_X: 0,
  DEFAULT_Y: 0
};

export const WORLD_BOUNDS = {
  TOP: 0,
  LEFT: 0,
  BOTTOM: WORLD_SIZE.HEIGHT,
  RIGHT: WORLD_SIZE.WIDTH,
};

export const SPEEDS = {
  DEFAULT: 1,
  PLAYER: 1.5,
  RABBIT: 0.75,
  STAG: 1.51
};

export const NUM_ANIMALS = {
  RABBITS: 20,
  STAGS: 1
};

// Front end constants ==========================

export const HTML = {
  CANVAS: "canvas",
  HEIGHT: "height",
  WIDTH: "width"
};

export const CANVAS = {
  DIMENSION: "2d",
  BACKGROUND_COLOR: "rgb(32, 128, 53)"
};

export const ENTITY_COLORS = {
  RABBIT: "rgb(196, 188, 183)",
  STAG: "rgb(92, 59, 36)"
};
