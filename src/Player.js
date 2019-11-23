const uuid = require("uuid/v4");

const EVENT = "event";

class Player {

  constructor(socket) {
    this.socket = socket;
    this.id = uuid().slice(0, 7);
    socket.on(EVENT, this.handleEvent);

    console.log(`New player created (${this.id}).`)
  }

  handleEvent(event) {
    console.log(`New event from (${this.id})`, event);
  }
}

module.exports = Player;
