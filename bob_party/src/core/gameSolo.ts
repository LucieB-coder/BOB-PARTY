import { Game } from './game'

export class GameSolo extends Game{
    readonly ptsToCoins:Map<number,number>

    constructor(id:number, name:string, imageSource:string, gameSource:string, nbPlayerMin:number, nbPlayerMax:number, ptsToCoins:Map<number,number>){
        super(id, name, imageSource, gameSource, nbPlayerMin,nbPlayerMax);
        this.ptsToCoins=ptsToCoins;
    }

    //Get the map of the game with points millestone as the keys and coins as the values 
    getSoloMap(){
        return this.ptsToCoins;
    }

    //Returns the gain depending on the number of points
    coinsCalculator(points:number): number{
        let coins=0;
        let test;
        for (let key of this.ptsToCoins.keys()){
            test = this.ptsToCoins.get(key);
            coins=key;
            if (test != undefined && test>=points){
                return coins;
            }
        }
        return coins;
    }
}