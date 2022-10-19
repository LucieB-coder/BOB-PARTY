import { randomBytes } from "crypto";
import { ImageSourcePropType } from "react-native";

export abstract class Game{
    private Name:string;
    private ImageSource:ImageSourcePropType;
    private GameSource:string;
    private NbPlayer: number;

    /* Constructor of the class */
    constructor (name:string, imageSource:ImageSourcePropType, gameSource:string, nbPlayer:number){
        this.Name=name;
        this.ImageSource=imageSource;
        this.GameSource=gameSource;
        this.NbPlayer=nbPlayer;
    }

    /* Brief : Function getting the name of a game */
    getName(){
        return this.Name;
    }

    /* Brief : Function setting the name of a game */
    setName(name:string){
        this.Name=name;
    }

    /* Brief : Function getting the image of a game */
    getImageSource(){
        return this.ImageSource;
    }

    /* Brief : Function setting the image of a game */
    setImageSource(imageSource:ImageSourcePropType){
        this.ImageSource=imageSource;
    }

    /* Brief : Function getting the source of a game */
    getGameSource(){
        return this.GameSource;
    }

    /* Brief : Function setting the source of a game */
    setGameSource(gameSource:string){
        this.GameSource=gameSource;
    }

    /* Brief : Function getting the number of player */
    getNbPlayer(){
        return this.NbPlayer;
    }

    /* Brief : Function setting the number of player*/
    setNbPlayer(nbPlayer:number){
        this.NbPlayer=nbPlayer;
    }
}