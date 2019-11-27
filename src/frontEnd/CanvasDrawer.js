import _ from "lodash";
import autobind from "autobind-decorator";

import vector from "../shared/vector";
import {
  HTML,
  CANVAS,
  WORLD_SIZE,
  ENTITY_SIZES,
  ENTITY_TYPES,
  ENTITY_COLORS,
} from "../shared/constants";

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;

@autobind
export default class CanvasDrawer {

  constructor() {
    const canvas = document.createElement(HTML.CANVAS);
    canvas.setAttribute(HTML.WIDTH, CANVAS_WIDTH);
    canvas.setAttribute(HTML.HEIGHT, CANVAS_HEIGHT);
    document.body.appendChild(canvas);
    this.canvasContext = canvas.getContext(CANVAS.DIMENSION);
  }

  drawWorldState(worldState) {
    this.resetCanvas();

    // Center the world around the player
    const me = worldState.entities.filter(entity => entity.isMe)[0];
    const transformedWorldState = this.transformWorldState(
      worldState,
      vector.difference(
        {
          x: WORLD_SIZE.WIDTH / 2,
          y: WORLD_SIZE.HEIGHT / 2
        },
        me.position
      )
    );

    // Draw all entities
    for (const entity of transformedWorldState.entities) {
      this.drawEntity(entity);
    }
  }

  resetCanvas() {
    this.canvasContext.fillStyle = CANVAS.BACKGROUND_COLOR;
    this.canvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  transformWorldState(worldState, translation) {
    const entities = worldState.entities.map(entity => {

      // Translate the entity's position
      let x = entity.position.x + translation.x;
      let y = entity.position.y + translation.y;

      // Modulo the position into the world's window
      x = ((x + WORLD_SIZE.WIDTH) % WORLD_SIZE.WIDTH);
      y = ((y + WORLD_SIZE.HEIGHT) % WORLD_SIZE.HEIGHT);

      if (x < 0 || x > WORLD_SIZE.WIDTH) {
        console.log("X BEFORE", x);
        console.log("X AFTER", ((x + WORLD_SIZE.WIDTH) % WORLD_SIZE.WIDTH));
      }

      // Scale world coordinates to the canvas coordinates
      x = x * CANVAS_WIDTH / WORLD_SIZE.WIDTH;
      y = y * CANVAS_HEIGHT / WORLD_SIZE.HEIGHT;

      return {
        ...entity,
        position: { x, y }
      };
    });

    return { ...worldState, entities };
  }

  drawEntity(entity) {
    switch (entity.type) {

      case ENTITY_TYPES.PLAYER:
        this.drawPlayer(entity);
        break;

      case ENTITY_TYPES.RABBIT:
        this.drawRabbit(entity);
        break;

      case ENTITY_TYPES.STAG:
        this.drawStag(entity);
        break;
    }
  }

  drawPlayer(player) {
    const size = ENTITY_SIZES.PLAYER;
    const color = player.color;
    this.drawRectangle(player.position, size, color);
  }

  drawStag(stag) {
    const size = ENTITY_SIZES.STAG;
    const color = ENTITY_COLORS.STAG;
    this.drawRectangle(stag.position, size, color);
  }

  drawRabbit(rabbit) {
    const size = ENTITY_SIZES.RABBIT;
    const color = ENTITY_COLORS.RABBIT;
    this.drawRectangle(rabbit.position, size, color);
  }

  drawRectangle(position, radius, color) {
    const { x, y } = position;
    this.canvasContext.fillStyle = color;
    this.canvasContext.fillRect(
      Math.round(x) - radius,
      Math.round(y) - radius,
      radius * 2,
      radius * 2
    );
  }
}
