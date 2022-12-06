import { Game } from './game'

export class GameCasino extends Game{

    constructor(id:number, name:string, imageSource:string, gameSource:string, nbPlayerMin:number, nbPlayerMax:number){
        super(id, name, imageSource, gameSource, nbPlayerMin, nbPlayerMax);
    }

    coinsCalculator(points: number): number {
        return points;
    }
}