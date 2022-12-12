import { Match } from "./match";
import { User } from "../User/user";
import { Game } from "../game";
import { GameCasino } from "../gameCasino";
import { UserCoinsModifier } from "../User/userCoinsModifier";

export default class MatchCasino extends Match{

    constructor(code:number, inGame:Boolean, tabUser:User[], game:GameCasino){
        super(code, inGame, tabUser, game);
    }

    updatePostMatch(user:User, points: number): void {
        const manage= new UserCoinsModifier();
        manage.addCoins(user, this.getGame().coinsCalculator(points));
        
    }
}