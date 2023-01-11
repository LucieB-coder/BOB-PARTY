
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

server.get('/server', function (req, res) {
    res.send('hello');
})

io.on('connection', (socket) => {
  console.log(socket.id);  

  socket.on('signIn', (id) => {
    socket.join("U"+id);
  });

  socket.on('inConv', (conv) => {
    socket.join("C" + conv.id);
  });

  socket.on('quitConv', (conv) => {
    socket.off("C" + conv);
  });

  socket.on("messageSent", (conv) =>{
    socket.to("C"+conv.id).emit("messageReceived");
    console.log("Message envoyé");
  });

  socket.on("createConversation", (tabId, conv) =>{
    tabId.forEach(id => {
      socket.to("U"+id).emit("addedToConv", conv);
    });
  });


  socket.on('joinMatch', (match) => {
    socket.join("M" + match.code);
    socket.to("M"+ match.code).emit("matchUsersChanged");
  });

  socket.on('launchMatch', (match) => {
    socket.to("M"+ match.code).emit("matchLaunched");
  });

  socket.on('quitMatch', (match) => {
    socket.to("M"+ match.code).emit("matchUsersChanged")
  });

  socket.on("playTicTacToe", (match, rowIndex, columnIndex, turn) =>{
    socket.to("M"+match.code).emit("oppPlayTicTacToe", rowIndex, columnIndex, turn);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});