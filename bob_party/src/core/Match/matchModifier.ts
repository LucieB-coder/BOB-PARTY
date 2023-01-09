import { MANAGER_MATCH } from "../../../appManagers";
import { Game } from "../game";
import { GameSolo } from "../gameSolo";
import { User } from "../User/user";
import { Match } from "./match";
import MatchSolo from "./matchSolo";

export default class MatchModifier{

    async createMatch(u:User, g:Game): Promise<Match>{
        if (g instanceof GameSolo){
            return new MatchSolo(0, false, [u], g);
        }
        return await MANAGER_MATCH.getsaverMatch().saveMatch(u, g);
    }

    async quitMatch(u:User, m:Match): Promise<void>{
        const saver=MANAGER_MATCH.getsaverMatch(); 
        if (m.getTabUsers().length===1){
            saver.deleteMatch(m);
        }
        else{
            saver.deleteUserFromMatch(u);
        }
    }
}