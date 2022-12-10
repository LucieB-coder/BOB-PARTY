import { Game } from "../../core/Game";
import { Match } from "../../core/Match/match";

import { User } from "../../core/User/user";
import ISaverMatch from "./ISaverMatch";
import { GameSolo } from "../../core/gameSolo";
import { GameMulti } from "../../core/gameMulti";
import MatchSolo from "../../core/Match/matchSolo";
import MatchMulti from "../../core/Match/matchMulti";
import MatchCasino from "../../core/Match/matchCasino";

export default class SaverMatchApi implements ISaverMatch{

    async saveMatch(u:User, g:Game): Promise<Match> {
        //match = mettre dans bdd
        if (g instanceof GameSolo){
            return new MatchSolo(12, false, [u], g);
        }
        else if(g instanceof GameMulti){
            return new MatchMulti(12, false, [u], g);
        }
        return new MatchCasino(12, false, [u], g);
        
    }
    async deleteMatch(m: Match): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async updateMatch(m: Match): Promise<void> {
        throw new Error("Method not implemented.");
    }

}