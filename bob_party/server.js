
const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {});

io.on('connection', (socket) => {
  console.log(socket.id);  

  socket.on('signIn', (id) => {
    socket.join("U"+id);
  });

  socket.on('inConv', (conv) => {
    socket.join("C" + conv.id);
  });

  socket.on('quitConv', (conv) => {
    socket.off("C" + conv.id);
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

httpServer.listen(3000);

