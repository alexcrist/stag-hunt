const _ = require("lodash");

const EVENT = "event";
const SPEED = 1;

class World {

  constructor(io) {
    this.io = io;
    this.worldState = {
      players: []
    };

    console.log("World created.");
  }

  addPlayer = (player) => {
    console.log(`Adding player (${player.id})...`);
    this.worldState.players.push(player);
  }

  removePlayer = (playerId) => {
    console.log(`Removing player (${playerId})...`)
    const playerIndex = _.findIndex(
      this.worldState.players,
      player => player.id === playerId
    );
    this.worldState.players.splice(playerIndex, 1);
  }

  update = () => {
    this.io.emit(EVENT, JSON.stringify(this.worldState));
  }
}

module.exports = World;
