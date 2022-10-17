import { ImageSourcePropType } from 'react-native';
import { Game } from './game'

export class GameCasino extends Game{
    readonly Coef:number;

    constructor(name:string, imageSource:ImageSourcePropType, gameSource:string, coef:number){
        super(name, imageSource, gameSource);
        this.Coef=coef;
    }

    //Get the coefficient of the casino game
    getCoef(){
        return this.Coef;
    }

    //Returns the coins gained with the initial bet of the user times the coefficient of the game
    betToCoins(bet:number){
        return this.Coef*bet;
    }
}