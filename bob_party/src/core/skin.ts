import { ImageSourcePropType } from "react-native";

export class Skin{
    private Name: string;
    private Source: ImageSourcePropType;

    constructor(name: string, source:ImageSourcePropType){
        this.Name=name;
        this.Source=source;
    }
    
    setSkinName(name: string){
        this.Name=name;
    }

    setSkinSource(source: ImageSourcePropType){
        this.Source=source;
    }

    getSkinSource(){
        return this.Source;
    }

    getSkinName(){
        return this.Name;
    }
}