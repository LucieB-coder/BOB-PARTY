import { ImageSourcePropType } from 'react-native';
import { Game } from './game'

export class GameSolo extends Game{
    readonly PtsToCoins:Map<number,number>

    constructor(name:string, imageSource:ImageSourcePropType, gameSource:string, nbPlayer:number, ptsToCoins:Map<number,number>){
        super(name, imageSource, gameSource, nbPlayer);
        this.PtsToCoins=ptsToCoins;
    }

    //Get the map of the game with points millestone as the keys and coins as the values 
    getSoloMap(){
        return this.PtsToCoins;
    }

    //Returns the gain depending on the number of points
    CoinsWithPoints(nbPoints:number){
        let coins;
        for (let key of this.PtsToCoins.keys()){
            coins = this.PtsToCoins.get(key);
            if (nbPoints<key){
                return coins;
            }
        }
        return coins;
    }
}