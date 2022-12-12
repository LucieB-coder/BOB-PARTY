import { GameSolo } from "./core/gameSolo";

let myMap = new Map<number, number>([
    [50, 3],
    [75, 4],
    [100, 5],
    [150, 6]
]);

let game=new GameSolo(1, "bo jeu", "", "super jeu", 1, 1, myMap);


export default game;