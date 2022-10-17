import { ImageSourcePropType } from "react-native";

export class Skin{
    readonly Id: string;
    private Name: string;
    private Source: ImageSourcePropType;
    private Cost:number;

    /* Constructor of the class */
    constructor(id:string, name: string, source:ImageSourcePropType, Cost:number){
        this.Id=id;
        this.Name=name;
        this.Source=source;
        this.Cost=Cost;
    }
    
    /* Brief : Fuction setting the name of a skin */
    setSkinName(name: string){
        this.Name=name;
    }

    /* Brief : Fuction setting the source of the image of a skin */
    setSkinSource(source: ImageSourcePropType){
        this.Source=source;
    }

    /* Brief : Fuction getting the source of the image of a skin */
    getSkinSource(){
        return this.Source;
    }

    /* Brief : Fuction getting the name of a skin */
    getSkinName(){
        return this.Name;
    }

    /* Brief : Fuction getting the id of a skin */
    getSkinId(){
        return this.Id;
    }

    /* Brief : Fuction getting the cost of a skin */
    getSkinCost(){
        return this.Cost;
    }

    /* Brief : Fuction getting the cost of a skin */
    setSkinCost(cost:number){
        this.Cost=cost;
    }
}