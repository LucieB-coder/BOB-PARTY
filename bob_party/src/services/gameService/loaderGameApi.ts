import { Game } from "../../core/game";
import { GameCasino } from "../../core/gameCasino";
import { GameMulti } from "../../core/gameMulti";
import { GameSolo } from "../../core/gameSolo";
import ILoaderGame from "./ILoaderGame";

export default class LoaderGameApi implements ILoaderGame{

    private axios = require('axios').default;

    private baseUrl = "https://codefirst.iut.uca.fr/containers/BOB_PARTEAM-api-bobParty/index.php/"
    
    async loadAllGames(): Promise<Game[]> {
        let tab: Game[]=[];
        const url=this.baseUrl+"getGames";
        await this.axios({
            method: 'get',
            url: url,

         })
         .then(function (response: any) {
            if (response.data != null && response.data != undefined){
                response.data.forEach(game => {
                    switch(game.type){
                        case "GameSolo":
                            let mapSolo = new Map();
                            for (let i=0; i<game.keys.length; i++){
                                mapSolo.set(new Number(game.keys[i]), new Number(game.values[i]))
                            }
                            tab.push(new GameSolo(game.id, game.name, game.image, game.nbPlayerMin, game.nbPlayerMax, mapSolo));
                            break;
                        case "GameMulti":
                            const mapMulti = new Map();
                            for (let i=0; i<game.keys.length; i++){
                                mapMulti.set(new Number(game.keys[i]), new Number(game.values[i]));
                            }
                            tab.push(new GameMulti(game.id, game.name, game.image, game.nbPlayerMin, game.nbPlayerMax, mapMulti));
                            break;
                        case "GameCasino":
                            tab.push(new GameCasino(game.id, game.name, game.image, game.nbPlayerMin, game.nbPlayerMax));
                            break;
                    }
                });
            }
         });
        return tab;
        
    }
    async loadByID(id: number): Promise<Game | null> {
        let game: Game|null=null;
        const url=this.baseUrl + "getGameById/" + id;
        await this.axios({
            method: 'get',
            url: url,
         }).then(function (response: any){
            if (response.data!=undefined && response.data!==null){
                switch(response.data.type){
                    case "GameSolo":
                        let mapSolo = new Map();
                        for (let i=0; i<response.data.keys.length; i++){
                            mapSolo.set(new Number(response.data.keys[i]), new Number(response.data.values[i]))
                        }
                        game = new GameSolo(response.data.id, response.data.name, response.data.image, response.data.nbPlayerMin, response.data.nbPlayerMax, mapSolo);
                        break;
                    case "GameMulti":
                        const mapMulti = new Map();
                        for (let i=0; i<response.data.keys.length; i++){
                            mapMulti.set(new Number(response.data.keys[i]), new Number(response.data.values[i]));
                        }
                        game = new GameMulti(response.data.id, response.data.name, response.data.image, response.data.nbPlayerMin, response.data.nbPlayerMax, mapMulti);
                        break;
                    case "GameCasino":
                        game = new GameCasino(response.data.id, response.data.name, response.data.image, response.data.nbPlayerMin, response.data.nbPlayerMax);
                        break;
                }
            }
        });
        return game;
    }

}