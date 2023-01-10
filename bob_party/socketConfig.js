const { io } = require("socket.io-client");


export const socket = io("http://codefirst.iut.uca.fr/containers/BOB_PARTEAM-server-bobParty:3000");