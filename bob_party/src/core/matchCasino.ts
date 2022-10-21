import { Match } from "./match";
import { User } from "./User/user";
import { Game } from "./game";
import { GameCasino } from "./gameCasino";

export class MatchMulti extends Match{

    constructor(code:string, tabUser:User[], game:GameCasino){
        super(code, tabUser, game);
    }
}