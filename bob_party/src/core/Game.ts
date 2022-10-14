export class Game{
    private Name:String;
    private ImageSource:String;
    private GameSource:String;

    constructor(name:String, imageSource:String, gameSource:String){
        this.Name=name;
        this.ImageSource=imageSource
        this.GameSource=gameSource;
    }

    getName(){
        return this.Name;
    }

    setName(name:String){
        this.Name=name;
    }

    getImageSource(imageSource:String){
        return this.ImageSource;
    }

    setImageSource(imageSource:String){
        this.ImageSource=imageSource;
    }

    getGameSource(){
        return this.GameSource;
    }

    setGameSource(gameSource:String){
        this.GameSource=gameSource;
    }
}