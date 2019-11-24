const _ = require("lodash");

const { SOCKET } = require("./constants");

class World {

  constructor(io) {
    this.io = io;
    this.worldState = {
      entities: []
    };

    console.log("World created.");
  }

  addPlayer = (player) => {
    console.log(`Adding player (${player.id})...`);
    this.worldState.entities.push(player);
  }

  removePlayer = (playerId) => {
    console.log(`Removing player (${playerId})...`)
    const playerIndex = _.findIndex(
      this.worldState.entities,
      player => player.id === playerId
    );
    this.worldState.entities.splice(playerIndex, 1);
  }

  update = () => {
    this.io.emit(SOCKET.EVENT, JSON.stringify(this.worldState));
  }
}

module.exports = World;
