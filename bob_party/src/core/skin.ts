import { ImageURISource } from "react-native";

export class Skin{
    private Name: string;
    private Source: any;

    constructor(name: string, source:any){
        this.Name=name;
        this.Source=source;
    }
    
    setSkinName(name: string){
        this.Name=name;
    }

    setSkinSource(source: any){
        this.Source=source;
    }

    getSkinSource(){
        return this.Source;
    }

    getSkinName(){
        return this.Name;
    }
}