
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
  console.log(socket.id)  

  socket.on('signIn', (id) => {
  });

  socket.on('inConv', (conv) => {
    socket.join("C" + conv.id);
  });

  socket.on("messageSent", (conv) =>{
    socket.to("C"+conv.id).emit("messageReceived");
    console.log("Message envoyé");
  });

  socket.on("createConversation", (tabId) =>{
    tabId.forEach(id => {
      socket.to("U"+id).emit("messageReceived");
    });
  });

  socket.on('inMatch', (match) => {
    socket.join("M" + match);
  });

  socket.on("playTicTacToe", (match, rowIndex, columnIndex, turn) =>{
    socket.to("M"+match).emit("oppPlayTicTacToe", rowIndex, columnIndex, turn);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});