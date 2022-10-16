import { ImageSourcePropType } from 'react-native';
import { Game } from './game'

export class GameSolo extends Game{
    readonly [Index:number]:number;

    constructor(name:string, imageSource:ImageSourcePropType, gameSource:string, [index:number]:number){
        super(name, imageSource, gameSource);
    }
}