import express from "express";
import http from "http";
import socketio from "socket.io";
import path from "path";

import World from "./World";
import Player from "./entities/Player";
import ClientHandler from "./ClientHandler";
import { SOCKET_EVENTS, SERVER, RENDER } from "../shared/constants";

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const world = new World(io);

app.get("/", (_, res) => {
  res.sendFile(
    path.join(__dirname, "../frontEnd/public/index.html")
  );
});

app.get("/bundle.js", (_, res) => {
  res.sendFile(
    path.join(__dirname, "../frontEnd/public/bundle.js")
  );
});

io.on(SOCKET_EVENTS.CONNECTION, (socket) => {

  // Create a new player
  const player = new Player(socket.id);
  new ClientHandler(socket, player);
  world.addPlayer(player);

  // Destroy the player when they disconnect
  socket.on(SOCKET_EVENTS.DISCONNECT, () => world.removePlayer(player.id));
});

server.listen(SERVER.PORT, () => {
  console.log(`Listening on port ${SERVER.PORT}`);
});

setInterval(() => world.update(), RENDER.REFRESH_INTERVAL);
