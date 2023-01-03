import { MANAGER_MATCH } from "../../../appManagers";
import { Game } from "../game";
import { User } from "../User/user";
import { Match } from "./match";

export default class MatchCreator{

    async createMatch(u:User, g:Game | undefined): Promise<Match>{
        return await MANAGER_MATCH.getsaverMatch().saveMatch(u, g);
    }
}