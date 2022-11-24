import { ImageSourcePropType } from "react-native";

export class Skin{
    readonly id: string;
    private name: string;
    private source: ImageSourcePropType;
    private cost:number;

    /* Constructor of the class */
    constructor(id:string, name: string, source:ImageSourcePropType, Cost:number){
        this.id=id;
        this.name=name;
        this.source=source;
        this.cost=Cost;
    }
    
    /* Brief : Fuction setting the name of a skin */
    setSkinName(name: string){
        this.name=name;
    }

    /* Brief : Fuction setting the source of the image of a skin */
    setSkinSource(source: ImageSourcePropType){
        this.source=source;
    }

    /* Brief : Fuction getting the source of the image of a skin */
    getSkinSource(){
        return this.source;
    }

    /* Brief : Fuction getting the name of a skin */
    getSkinName(){
        return this.name;
    }

    /* Brief : Fuction getting the id of a skin */
    getSkinId(){
        return this.id;
    }

    /* Brief : Fuction getting the cost of a skin */
    getSkinCost(){
        return this.cost;
    }

    /* Brief : Fuction getting the cost of a skin */
    setSkinCost(cost:number){
        this.cost=cost;
    }

    isEqual(s:Skin){
        return this.id==s.id;
    }
}