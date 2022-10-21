import { ImageSourcePropType } from 'react-native';
import { Game } from './game'

export class GameCasino extends Game{

    constructor(name:string, imageSource:ImageSourcePropType, gameSource:string, nbPlayerMin:number, nbPlayerMax:number){
        super(name, imageSource, gameSource, nbPlayerMin, nbPlayerMax);
    }
}