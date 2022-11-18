import { Match } from "./match";
import { GameSolo } from "./gameSolo";
import { User } from "./User/user";
import { Game } from "./game";
import { ManagerCoinsUser } from "./User/managerCoinsUser";

export class MatchSolo extends Match{

    constructor(code:string, tabUser:User[], game:GameSolo){
        super(code, tabUser, game);
    }

    updatePostMatch(user:User, points: number): void {
        const manage= new ManagerCoinsUser();
        manage.addCoins(user, this.getGame().coinsCalculator(points));
    }
}