import { randomBytes } from "crypto";
import { ImageSourcePropType } from "react-native";

export class Game{
    private Name:string;
    private ImageSource:ImageSourcePropType;
    private GameSource:string ;

    constructor (name:string, imageSource:ImageSourcePropType, gameSource:string){
        this.Name=name;
        this.ImageSource=imageSource;
        this.GameSource=gameSource;
    }

    getName(){
        return this.Name;
    }

    setName(name:string){
        this.Name=name;
    }

    getImageSource(){
        return this.ImageSource;
    }

    setImageSource(imageSource:ImageSourcePropType){
        this.ImageSource=imageSource;
    }

    getGameSource(){
        return this.GameSource;
    }

    setGameSource(gameSource:string){
        this.GameSource=gameSource;
    }
}