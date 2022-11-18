import { Match } from "./match";
import { User } from "./User/user";
import { Game } from "./game";
import { GameMulti } from "./gameMulti";
import { ManagerCoinsUser } from "./User/managerCoinsUser";

export class MatchMulti extends Match{

    constructor(code:string, inGame:Boolean, tabUser:User[], game:GameMulti){
        super(code, inGame, tabUser, game);
    }

    updatePostMatch(user:User, points: number): void {
        const manage= new ManagerCoinsUser();
        manage.addCoins(user, this.getGame().coinsCalculator(points));
    }
}