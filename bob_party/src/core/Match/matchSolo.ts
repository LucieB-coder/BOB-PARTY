import { Match } from "./match";
import { GameSolo } from "../gameSolo";
import { User } from "../User/user";
import { Game } from "../Game";
import { ManagerCoinsUser } from "../User/userCoinsModifier";

export default class MatchSolo extends Match{

    constructor(code:number, inGame:Boolean, tabUser:User[], game:GameSolo){
        super(code, inGame, tabUser, game);
    }

    updatePostMatch(user:User, points: number): void {
        const manage= new ManagerCoinsUser();
        manage.addCoins(user, this.getGame().coinsCalculator(points));
    }
}