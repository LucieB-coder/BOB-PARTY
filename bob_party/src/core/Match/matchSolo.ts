import { Match } from "./match";
import { GameSolo } from "../gameSolo";
import { User } from "../User/user";
import { Game } from "../game";
import { UserCoinsModifier } from "../User/userCoinsModifier";

export default class MatchSolo extends Match{

    constructor(code:number, inGame:Boolean, tabUser:User[], game:GameSolo){
        super(code, inGame, tabUser, game);
    }

    async updatePostMatch(user:User, points: number): Promise<void> {
        const manage= new UserCoinsModifier();
        await manage.addCoins(user, this.getGame().coinsCalculator(points));
    }
}