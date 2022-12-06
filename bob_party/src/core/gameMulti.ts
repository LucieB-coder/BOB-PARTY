import { Game } from './game'

export class GameMulti extends Game{
    readonly rankToCoins:Map<number,number>

    constructor(id:number, name:string, imageSource:string, gameSource:string, nbPlayerMin:number, nbPlayerMax:number, rankToCoins:Map<number,number>){
        super(id, name, imageSource, gameSource, nbPlayerMin, nbPlayerMax);
        this.rankToCoins=rankToCoins;
    }

    //Get the map of the game with the rank as the key and the coins as the values
    getMultiMap(){
        return this.rankToCoins;
    }

    //Returns the coins gained depending on the rank
    coinsCalculator(points:number): number{
        let coins=0;
        let test;
        for (let key of this.rankToCoins.keys()){
            test = this.rankToCoins.get(key);
            if (test != undefined){
                coins=test;
            }
            if (points==key ){
                return coins;
            }
        }
        return coins;
    }
}