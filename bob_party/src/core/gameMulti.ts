import { ImageSourcePropType } from 'react-native';
import { Game } from './game'

export class GameMulti extends Game{
    readonly rankToCoins:Map<number,number>

    constructor(name:string, imageSource:ImageSourcePropType, gameSource:string, nbPlayerMin:number, nbPlayerMax:number, rankToCoins:Map<number,number>){
        super(name, imageSource, gameSource, nbPlayerMin, nbPlayerMax);
        this.rankToCoins=rankToCoins;
    }

    //Get the map of the game with the rank as the key and the coins as the values
    getMultiMap(){
        return this.rankToCoins;
    }

    //Returns the coins gained depending on the rank
    CoinsWithRank(rank:number){
        let coins;
        for (let key of this.rankToCoins.keys()){
            coins = this.rankToCoins.get(key);
            if (rank==key ){
                return coins;
            }
        }
        return coins;
    }
}