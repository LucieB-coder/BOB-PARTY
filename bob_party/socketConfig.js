const { io } = require("socket.io-client");


export const socket = io("https://codefirst.iut.uca.fr/containers/BOB_PARTEAM-server-bobParty/server:3000");