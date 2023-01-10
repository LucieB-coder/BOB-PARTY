import { Match } from "./match";
import { User } from "../User/user";
import { Game } from "../game";
import { GameCasino } from "../gameCasino";
import { UserCoinsModifier } from "../User/userCoinsModifier";

export default class MatchCasino extends Match{

    constructor(code:number, inGame:Boolean, tabUser:User[], game:GameCasino){
        super(code, inGame, tabUser, game);
    }

    async updatePostMatch(user:User, points: number): Promise<void> {
        const manage= new UserCoinsModifier();
        await manage.addCoins(user, this.getGame().coinsCalculator(points));
        
    }
}