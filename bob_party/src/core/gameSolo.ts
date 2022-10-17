import { ImageSourcePropType } from 'react-native';
import { Game } from './game'

export class GameSolo extends Game{
    readonly PtsToCoins:Map<number,number>

    constructor(name:string, imageSource:ImageSourcePropType, gameSource:string, ptsToCoins:Map<number,number>){
        super(name, imageSource, gameSource);
        this.PtsToCoins=ptsToCoins;
    }


    getSoloMap(){
        return this.PtsToCoins;
    }

    CoinsWithPoints(nbPoints:number){
        let coins;
        for (let key of this.PtsToCoins.keys()){
            coins = this.PtsToCoins.get(key);
            if (nbPoints<key ){
                return coins;
            }
        }
        return coins;
    }
}