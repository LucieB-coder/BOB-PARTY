import { ImageSourcePropType } from "react-native";

export class Skin{
    readonly Id: string;
    private Name: string;
    private Source: ImageSourcePropType;
    private Cost:number;

    constructor(id:string, name: string, source:ImageSourcePropType, Cost:number){
        this.Id=id;
        this.Name=name;
        this.Source=source;
        this.Cost=Cost;
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

    getSkinCost(){
        return this.Cost;
    }

    setSkinCost(cost:number){
        this.Cost=cost;
    }
}