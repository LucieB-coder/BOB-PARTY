import { Game } from "../../core/game";
import { Match } from "../../core/Match/match";

import { User } from "../../core/User/user";
import ISaverMatch from "./ISaverMatch";
import { GameSolo } from "../../core/gameSolo";
import { GameMulti } from "../../core/gameMulti";
import MatchSolo from "../../core/Match/matchSolo";
import MatchMulti from "../../core/Match/matchMulti";
import MatchCasino from "../../core/Match/matchCasino";
import { MANAGER_MATCH } from "../../../appManagers";

export default class SaverMatchApi implements ISaverMatch{


    private axios = require('axios').default;

    private baseUrl = "https://codefirst.iut.uca.fr/containers/BOB_PARTEAM-api-bobParty/index.php/"


    async saveMatch(u:User, g:Game): Promise<Match> {
        let id=0;
        let url=this.baseUrl + 'postMatch/' + g.id + "/" + u.id;
        await this.axios({
            method: 'post',
            url: url,
         })
         .then(async (response: any) => {
            id=response.data.id;
        });

        if(g instanceof GameMulti){
            return new MatchMulti(id, false, [u], g);
        }
        return new MatchCasino(id, false, [u], g);
        
    }
    async deleteMatch(m: Match): Promise<void> {
        let url=this.baseUrl + 'deleteMatch/' + m.getCode();
        await this.axios({
            method: 'delete',
            url: url,
         });
    }

    async deleteUserFromMatch(u: User): Promise<void> {
        let url=this.baseUrl + 'deleteUserFromMatch/' + u.id;
        await this.axios({
            method: 'put',
            url: url,
         });
    }

    updateMatch(m: Match): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async joinMatch(u:User, id:number): Promise<Match | null>{
        let match:Match|null=null;
        let url=this.baseUrl + 'addUserToMatch/' + id + "/" + u.id;

        await MANAGER_MATCH.getLoaderMatch().loadByID(id).then(async (response)=>{
            if (response!==undefined && response !== null){
                console.log(response.getTabUsers().length + " : " + response.getGame().getNbPlayerMax());
                if (response.getTabUsers().length<response.getGame().getNbPlayerMax() && response.getInGame()===false){
                    response.getTabUsers().push(u);
                    match=response;
                    await this.axios({
                        method: 'put',
                        url: url,
                     });
                }
                else{
                    return null;
                }
            }
            else{
                return null;
            }
        });
        return match;
    }

    


}