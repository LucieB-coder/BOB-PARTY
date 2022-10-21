import { Match } from "./match";
import { User } from "./User/user";
import { Game } from "./game";
import { GameMulti } from "./gameMulti";

export class MatchMulti extends Match{

    constructor(code:string, tabUser:User[], game:GameMulti){
        super(code, tabUser, game);
    }
}