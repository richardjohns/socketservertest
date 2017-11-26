// socket.io server
import Server from 'socket.io'
import {toJS} from 'immutable'

export default function startServer(store) {
  const io = new Server().attach(8090)

  store.subscribe(
    () => io.emit('state', store.getState())
    // () => io.emit('state', store.getState().toJS())
  )

  io.on('connection', (socket) => {
    socket.emit('state', store.getState())
    // socket.emit('state', store.getState().toJS())
    socket.on('action', store.dispatch.bind(store))
  })
}

// express server
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const videos = require("./routes/videos");
const winners = require("./routes/winners");

const expressServer = express();

expressServer.use(cors("*"));

expressServer.use(bodyParser.json());
expressServer.use(express.static(path.join(__dirname, "./public")));

expressServer.use("/api/v1", videos);
expressServer.use("/api/v1/winners", winners);

expressServer.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// module.exports = expressServer;