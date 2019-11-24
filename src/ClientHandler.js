const EVENT = "event";
const KEY_UP = "keyup";
const KEY_DOWN = "keydown";

class ClientHandler {

  constructor(socket, player) {
    this.socket = socket;
    this.player = player;
    socket.on(EVENT, this.handleEvent);
    console.log(`Player connected (${player.id}).`);
  }

  handleEvent = (event) => {
    console.log(`New event from (${this.id})`, event);
    if (event.action === KEY_DOWN) {
      this.player.handleKeyDown(event.key);
    } else {
      this.player.handleKeyUp(event.key);
    }
  }
}

module.exports = ClientHandler;
