import { GameSolo } from "./core/gameSolo";

let myMap = new Map<number, number>([
    [50, 3],
    [75, 4],
    [100, 5],
    [150, 6]
]);

let game=new GameSolo("bo jeu", require('bob_party/assets/ImagesJeux/blackjack.jpg'), "super jeu", myMap);

export default game;