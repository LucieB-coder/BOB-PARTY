import { ImageSourcePropType } from 'react-native';
import { Game } from './game'

export class GameCasino extends Game{

    constructor(id:string, name:string, imageSource:ImageSourcePropType, gameSource:string, nbPlayerMin:number, nbPlayerMax:number){
        super(id, name, imageSource, gameSource, nbPlayerMin, nbPlayerMax);
    }

    coinsCalculator(points: number): number {
        return points;
    }
}