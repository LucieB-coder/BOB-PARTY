const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const connectUsers = []

io.on('connection', (socket) => {
  console.log(socket.id)  

  socket.on('joinRoom', ({username}) => {
    connectUsers.push(username)

    socket.emit('roomJoined', connectUsers)
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});