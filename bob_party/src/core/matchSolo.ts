import { Match } from "./match";
import { GameSolo } from "./gameSolo";
import { User } from "./User/user";
import { Game } from "./game";
import { ManagerCoinsUser } from "./User/managerCoinsUser";

export class MatchSolo extends Match{

    constructor(code:string, inGame:Boolean, tabUser:User[], game:GameSolo){
        super(code, inGame, tabUser, game);
    }

    updatePostMatch(user:User, coins: number): void {
        const manage= new ManagerCoinsUser();
        manage.addCoins(user, this.getGame().coinsCalculator(coins));
    }
}