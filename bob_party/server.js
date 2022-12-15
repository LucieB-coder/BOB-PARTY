
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const connectUsers = [];

io.on('connection', (socket) => {
  console.log(socket.id)  


  socket.on('inConv', (conv) => {
    socket.join("C" + conv.id);
  });

  socket.on("messageSent", (conv) =>{
    socket.to("C"+conv.id).emit("messageReceived");
    console.log("Message envoyé");
  });
  
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});