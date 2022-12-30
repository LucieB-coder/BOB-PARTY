const { io } = require("socket.io-client");


export const socket = io("http://192.168.1.54:3000");