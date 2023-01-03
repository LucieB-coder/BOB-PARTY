export abstract class Game{
    readonly id:number;
    private name:string;
    private imageSource:string;
    private nbPlayerMin: number;
    private nbPlayerMax:number;

    /* Constructor of the class */
    constructor (id:number, name:string, imageSource:string, nbPlayerMin:number, nbPlayerMax:number){
        this.id=id;
        this.name=name;
        this.imageSource=imageSource;
        this.nbPlayerMin=nbPlayerMin;
        this.nbPlayerMax=nbPlayerMax;
    }

    /* Brief : Function getting the id of a game */
    getId(){
        return this.id;
    }

    /* Brief : Function getting the name of a game */
    getName(){
        return this.name;
    }

    /* Brief : Function setting the name of a game */
    setName(name:string){
        this.name=name;
    }

    /* Brief : Function getting the image of a game */
    getImageSource(){
        return this.imageSource;
    }

    /* Brief : Function setting the image of a game */
    setImageSource(imageSource:string){
        this.imageSource=imageSource;
    }

    /* Brief : Function getting the number of player */
    getNbPlayerMin(){
        return this.nbPlayerMin;
    }

    /* Brief : Function setting the number of player*/
    setNbPlayerMin(nbPlayerMin:number){
        this.nbPlayerMin=nbPlayerMin;
    }

    /* Brief : Function getting the number of player */
    getNbPlayerMax(){
        return this.nbPlayerMax;
    }

    /* Brief : Function setting the number of player*/
    setNbPlayerMax(nbPlayerMax:number){
        this.nbPlayerMax=nbPlayerMax;
    }

    abstract coinsCalculator(points: number): number;
}
