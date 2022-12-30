import { Game } from "../../core/game";
import ILoaderGame from "./ILoaderGame";

export default class ManagerGame{

    private tabGame: Game[]=[];

    private tabGameSolo: Game[]=[];

    private tabGameMulti: Game[]=[];

    private loaderGame: ILoaderGame;

    constructor(loader:ILoaderGame){
        this.loaderGame=loader;
    }

    getTabGame(){
        return this.tabGame;
    }

    setTabGame(g:Game[]){
        this.tabGame=g;
    }

    getTabGameSolo(){
        return this.tabGameSolo;
    }

    setTabGameSolo(g:Game[]){
        this.tabGameSolo=g;
    }

    getTabGameMulti(){
        return this.tabGameMulti;
    }

    setTabGameMulti(g:Game[]){
        this.tabGameMulti=g;
    }

    getLoaderGame(){
        return this.loaderGame;
    }

}