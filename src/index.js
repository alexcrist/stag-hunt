const express = require("express");
const http = require("http");
const socketio = require("socket.io")

const World = require("./World");
const Player = require("./Player");
const ClientHandler = require("./ClientHandler");
const { SOCKET, SERVER, RENDER, NUM_ANIMALS } = require("./constants");

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const world = new World(io);
for (let i = 0; i < NUM_ANIMALS.RABBITS; i++) {
  console.log("R")
  world.addRabbit();
}
for (let i = 0; i < NUM_ANIMALS.STAGS; i++) {
  world.addStag();
}

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on(SOCKET.CONNECTION, (socket) => {
  // Create a new player
  const player = new Player(socket.id);
  new ClientHandler(socket, player);
  world.addPlayer(player);

  // Destroy the player when they disconnect
  socket.on(SOCKET.DISCONNECT, () => world.removePlayer(player.id));
});

server.listen(SERVER.PORT, () => {
  console.log(`Listening on port ${SERVER.PORT}`);
});

setInterval(world.update, RENDER.REFRESH_INTERVAL);
