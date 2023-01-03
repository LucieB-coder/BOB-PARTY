import { Game } from "../../core/game";
import { GameCasino } from "../../core/gameCasino";
import { GameMulti } from "../../core/gameMulti";
import { GameSolo } from "../../core/gameSolo";
import ILoaderGame from "./ILoaderGame";

export default class LoaderGameApi implements ILoaderGame{

    private axios = require('axios').default;

    
    async loadAllGames(): Promise<Game[]> {
        let tab: Game[]=[];
        const url="http://localhost:8888/api-rest/index.php/getGames";
        await this.axios({
            method: 'get',
            url: url,

         })
         .then(function (response: any) {
            response.data.forEach(game => {
                switch(game.type){
                    case "GameSolo":
                        let mapSolo = new Map();
                        for (let i=0; i<game.keys.length; i++){
                            mapSolo.set(new Number(game.keys[i]), new Number(game.values[i]))
                        }
                        tab.push(new GameSolo(game.id, game.name, game.image, game.nmbPlayerMin, game.nbPlayerMax, mapSolo));
                        break;
                    case "GameMulti":
                        const mapMulti = new Map();
                        for (let i=0; i<game.keys.length; i++){
                            mapMulti.set(new Number(game.keys[i]), new Number(game.values[i]));
                        }
                        tab.push(new GameMulti(game.id, game.name, game.image, game.nmbPlayerMin, game.nbPlayerMax, mapMulti));
                        break;
                    case "GameCasino":
                        tab.push(new GameCasino(game.id, game.name, game.image, game.nmbPlayerMin, game.nbPlayerMax));
                        break;
                }
            });
            
        });
        return tab;
        
    }
    async loadByID(id: string): Promise<Game | null> {
        throw new Error("Method not implemented.");
    }

}