import { ImageSourcePropType } from 'react-native';
import { Game } from './game'

export class GameSolo extends Game{
    readonly ptsToCoins:Map<number,number>

    constructor(name:string, imageSource:ImageSourcePropType, gameSource:string, nbPlayerMin:number, nbPlayerMax:number, ptsToCoins:Map<number,number>){
        super(name, imageSource, gameSource, nbPlayerMin,nbPlayerMax);
        this.ptsToCoins=ptsToCoins;
    }

    //Get the map of the game with points millestone as the keys and coins as the values 
    getSoloMap(){
        return this.ptsToCoins;
    }

    //Returns the gain depending on the number of points
    CoinsWithPoints(nbPoints:number){
        let coins;
        for (let key of this.ptsToCoins.keys()){
            coins = this.ptsToCoins.get(key);
            if (nbPoints<key ){
                return coins;
            }
        }
        return coins;
    }
}