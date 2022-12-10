import { MANAGER_MATCH } from "../../../App";
import ManagerMatch from "../../services/matchServices/managerMatch";
import { Game } from "../Game";
import { User } from "../User/user";
import { Match } from "./match";

export default class MatchCreator{

    async createMatch(u:User, g:Game): Promise<Match>{
        return await MANAGER_MATCH.getsaverMatch().saveMatch(u, g);
    }
}