const _ = require("lodash");

const { SOCKET, ENTITY_TYPES } = require("./constants");
const Rabbit = require("./Rabbit");

class World {

  constructor(io) {
    this.io = io;
    this.worldState = {
      entities: []
    };

    console.log("World created.");
  }

  addRabbit = () => {
    this.worldState.entities.push(new Rabbit());
  };

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
    for (const entity of this.worldState.entities) {
      entity.update(this.worldState);
    }

    this.io.emit(SOCKET.WORLD_STATE, JSON.stringify(this.worldState));
  }
}

module.exports = World;
