const express = require("express");
const http = require("http");
const socketio = require("socket.io")

const World = require("./World");
const Player = require("./Player");
const ClientHandler = require("./ClientHandler");

const PORT = 3000;
const CONNECTION = "connection";
const DISCONNECT = "disconnect";

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const world = new World(io);

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on(CONNECTION, (socket) => {
  // Create a new player
  const player = new Player();
  new ClientHandler(socket, player);
  world.addPlayer(player);

  // Destroy the player when they disconnect
  socket.on(DISCONNECT, () => world.removePlayer(player.id));
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

setInterval(world.update, 1000);
