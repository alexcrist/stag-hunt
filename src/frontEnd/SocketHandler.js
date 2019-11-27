import io from "socket.io-client";
import autobind from "autobind-decorator";

import { SOCKET_EVENTS } from "../shared/constants";

@autobind
export default class SocketHandler {

  constructor(drawWorldState) {
    this.drawWorldState = drawWorldState;
    this.socket = io();
    this.socket.on(SOCKET_EVENTS.WORLD_STATE, this.receiveWorldState);
  }

  sendEvent(event) {
    this.socket.emit(
      SOCKET_EVENTS.CLIENT_ACTION,
      event
    );
  }

  receiveWorldState(worldStateString) {
    let worldState = JSON.parse(worldStateString);

    // Add an 'isMe' flag to the player's entity
    for (const entity of worldState.entities) {
      const socketId = this.socket && this.socket.id;
      if (entity.id === socketId) {
        entity.isMe = true;
      }
    }

    this.drawWorldState(worldState);
  }
}
