import { Game } from "../../core/game";
import ILoaderGame from "./ILoaderGame";

export default class ManagerGame{

    private tabGame: Game[] | null=null;

    private loaderGame: ILoaderGame;

    constructor(loader:ILoaderGame){
        this.loaderGame=loader;
    }

    getTabGame(){
        return this.tabGame;
    }

    setTabGame(g:Game[] | null){
        this.tabGame=g;
    }

    getLoaderGame(){
        return this.loaderGame;
    }

    setLoaderGame(l:ILoaderGame){
        this.loaderGame=l;
    }

}