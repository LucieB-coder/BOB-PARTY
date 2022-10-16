import { ImageSourcePropType } from "react-native";

export class Skin{
    readonly Id: string;
    private Name: string;
    private Source: ImageSourcePropType;

    constructor(id:string, name: string, source:ImageSourcePropType){
        this.Id=id;
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

    getSkinId(){
        return this.Id;
    }
}