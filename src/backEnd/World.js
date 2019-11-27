import _ from "lodash";

import Stag from "./entities/Stag";
import Rabbit from "./entities/Rabbit";
import { SOCKET_EVENTS, NUM_ANIMALS } from "../shared/constants";

export default class World {

  constructor(io) {
    this.io = io;
    this.worldState = {
      entities: []
    };

    for (let i = 0; i < NUM_ANIMALS.RABBITS; i++) {
      this.addRabbit();
    }
    for (let i = 0; i < NUM_ANIMALS.STAGS; i++) {
      this.addStag();
    }

    console.log("World created.");
  }

  addRabbit() {
    this.worldState.entities.push(new Rabbit());
  };

  addStag() {
    this.worldState.entities.push(new Stag());
  };

  addPlayer(player) {
    console.log(`Adding player (${player.id})...`);
    this.worldState.entities.push(player);
  }

  removePlayer(playerId) {
    console.log(`Removing player (${playerId})...`)
    const playerIndex = _.findIndex(
      this.worldState.entities,
      player => player.id === playerId
    );
    this.worldState.entities.splice(playerIndex, 1);
  }

  update() {
    for (const entity of this.worldState.entities) {
      entity.update(this.worldState);
    }

    this.io.emit(
      SOCKET_EVENTS.WORLD_STATE,
      JSON.stringify(this.worldState)
    );
  }
}
