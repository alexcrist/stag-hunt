const { SOCKET, CLIENT_ACTIONS } = require("./constants");

class ClientHandler {

  constructor(socket, player) {
    this.socket = socket;
    this.player = player;
    socket.on(SOCKET.EVENT, this.handleEvent);
    console.log(`Player connected (${player.id}).`);
  }

  handleEvent = (event) => {
    console.log(`New event from (${this.id})`, event);

    if (event.action === CLIENT_ACTIONS.KEY_DOWN) {
      this.player.handleKeyDown(event.key);
    }

    else if (event.action === CLIENT_ACTIONS.KEY_UP) {
      this.player.handleKeyUp(event.key);
    }
  }
}

module.exports = ClientHandler;
