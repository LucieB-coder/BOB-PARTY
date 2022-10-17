import { ImageSourcePropType } from 'react-native';
import { Game } from './game'

export class GameMulti extends Game{
    readonly RankToCoins:Map<number,number>

    constructor(name:string, imageSource:ImageSourcePropType, gameSource:string, rankToCoins:Map<number,number>){
        super(name, imageSource, gameSource);
        this.RankToCoins=rankToCoins;
    }

    //Get the map of the game with the rank as the key and the coins as the values
    getMultiMap(){
        return this.RankToCoins;
    }

    //Returns the coins gained depending on the rank
    CoinsWithRank(rank:number){
        let coins;
        for (let key of this.RankToCoins.keys()){
            coins = this.RankToCoins.get(key);
            if (rank==key ){
                return coins;
            }
        }
        return coins;
    }
}