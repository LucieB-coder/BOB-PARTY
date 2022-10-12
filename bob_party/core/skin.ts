export class Skin{
    private Name: string;
    private Source: string;

    constructor(name: string, source:string){
        this.Name=name;
        this.Source=source;
    }
    
    setSkinName(name: string){
        this.Name=name;
    }

    setSkinSource(source: string){
        this.Source=source;
    }

    getSkinSource(){
        return this.Source;
    }

    getSkinName(){
        return this.Name;
    }
}