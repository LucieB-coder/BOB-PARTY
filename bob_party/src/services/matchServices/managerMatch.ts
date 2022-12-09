import { Match } from "../../core/Match/Match";
import ILoaderMatch from "./ILoaderMatch";
import ISaverMatch from "./ISaverMatch";

export default class ManagerMatch{

    private currentMatch: Match | null=null;

    private loaderMatch: ILoaderMatch;

    private saverMatch: ISaverMatch;

    constructor(loader:ILoaderMatch, saver:ISaverMatch){
        this.loaderMatch=loader;
        this.saverMatch=saver;
    }

    getCurrentMatch(){
        return this.currentMatch;
    }

    setCurrentMatch(u:Match | null){
        this.currentMatch=u;
    }

    getLoaderMatch(){
        return this.loaderMatch;
    }

    setLoaderMatch(l:ILoaderMatch){
        this.loaderMatch=l;
    }

    getsaverMatch(){
        return this.saverMatch;
    }

    setsaverMatch(s:ISaverMatch){
        this.saverMatch=s;
    }
}