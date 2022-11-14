import { Match } from "./match";
import { User } from "./User/user";
import { Game } from "./game";
import { GameCasino } from "./gameCasino";
import { ManagerCoinsUser } from "./User/managerCoinsUser";

export class MatchMulti extends Match{

    constructor(code:string, tabUser:User[], game:GameCasino){
        super(code, tabUser, game);
    }

    updatePostMatch(user:User, coins: number): void {
        const manage= new ManagerCoinsUser();
        manage.addCoins(user, this.getGame().coinsCalculator(coins));
        
    }
}