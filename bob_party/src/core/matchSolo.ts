import { Match } from "./match";
import { GameSolo } from "./gameSolo";
import { User } from "./User/user";
import { Game } from "./game";

export class MatchSolo extends Match{

    constructor(code:string, tabUser:User[], game:GameSolo){
        super(code, tabUser, game);
    }
}