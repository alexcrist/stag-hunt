import { SOCKET_EVENTS, CLIENT_ACTIONS } from "../shared/constants";

export default class ClientHandler {

  constructor(socket, player) {
    this.socket = socket;
    this.player = player;
    socket.on(SOCKET_EVENTS.CLIENT_ACTION, this.handleEvent.bind(this));
    console.log(`Player connected (${player.id}).`);
  }

  handleEvent(event) {
    if (event.action === CLIENT_ACTIONS.KEY_DOWN) {
      this.player.handleKeyDown(event.key);
    }

    else if (event.action === CLIENT_ACTIONS.KEY_UP) {
      this.player.handleKeyUp(event.key);
    }
  }
}
