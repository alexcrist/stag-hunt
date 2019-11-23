const _ = require("lodash");

const BROADCAST = "broadcast";

class World {

  constructor(io) {
    this.io = io;
    this.worldState = {
      players: []
    };

    console.log("World created.");
  }

  addPlayer(player) {
    console.log(`Adding player (${player.id})...`);
    this.worldState = {
      ...this.worldState,
      players: [
        ...this.worldState.players,
        player
      ]
    };
  }

  removePlayer(playerId) {
    console.log(`Removing player (${playerId})...`)
    const playerIndex = _.findIndex(
      this.worldState.players,
      player => player.id === playerId
    );
    this.worldState.players.splice(playerIndex, 1);
  }

  update() {
    this.io.emit(BROADCAST, this.worldState);
  }
}

module.exports = World;
