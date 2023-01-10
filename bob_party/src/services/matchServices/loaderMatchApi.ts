import { rejects } from "assert";
import { MANAGER_GAME, MANAGER_USER } from "../../../appManagers";
import { GameCasino } from "../../core/gameCasino";
import { GameMulti } from "../../core/gameMulti";
import { Match } from "../../core/Match/match";
import MatchCasino from "../../core/Match/matchCasino";
import MatchMulti from "../../core/Match/matchMulti";
import { User } from "../../core/User/user";
import ILoaderMatch from "./ILoaderMatch";

export default class LoaderMatchApi implements ILoaderMatch{

    private axios = require('axios').default;

    private baseUrl = "https://codefirst.iut.uca.fr/containers/BOB_PARTEAM-api-bobParty/index.php/"

    
    async loadAllMatch(): Promise<Match[]> {
        throw new Error("Method not implemented.");
    }

    async loadByID(id: number): Promise<Match | null> {
        let match:Match|null=null;
        const url=this.baseUrl + 'getMatchById/' + id;
        await this.axios({
            method: 'get',
            url: url,
         })
         .then(async function (response: any) {
            if (response.data != null || response.data != undefined){
                match=await jsonToMatch(response);
            }
        });
        return match; 
    }

}


async function jsonToMatch(response: any){
    let match: Match| null=null;
    const tabUs: User[]=[];
    let users=new Promise<void>((resolve, reject) => {
        response.data.listIdUsers.forEach(async (idUser: number) => {
            await MANAGER_USER.getLoaderUser().loadByID(idUser).then((res) =>{
                if (res!==null){
                    tabUs.push(res);
                }
            });
            if (tabUs.length===response.data.listIdUsers.length){
                resolve();
            }
        });
    });
    const game = await MANAGER_GAME.getLoaderGame().loadByID(response.data.idGame);
    await Promise.all([users]);
    if (game!==null){
        if (game instanceof GameMulti){
            match = new MatchMulti(response.data.id, response.data.inGame, tabUs, game);
        }
        else if (game instanceof GameCasino){
            match = new MatchCasino(response.data.id, response.data.inGame, tabUs, game) 
        }
    }
    return match;

    
}