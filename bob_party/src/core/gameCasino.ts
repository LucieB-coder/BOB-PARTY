import { Game } from './game'

export class GameCasino extends Game{

    constructor(id:number, name:string, imageSource:string, nbPlayerMin:number, nbPlayerMax:number){
        super(id, name, imageSource, nbPlayerMin, nbPlayerMax);
    }

    coinsCalculator(points: number): number {
        return points;
    }
}