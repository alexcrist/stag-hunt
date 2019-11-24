const _ = require("lodash");

const EVENT = "event";

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
    this.io.emit(EVENT, JSON.stringify(this.worldState));
  }
}

module.exports = World;
