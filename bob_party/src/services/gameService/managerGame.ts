import { Game } from "../../core/game";
import ILoaderGame from "./ILoaderGame";

export default class ManagerGame{

    private tabGame: Game[] | null=null;

    private tabGameSolo: Game[] | null=null;

    private tabGameMulti: Game[] | null=null;

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

    getTabGameSolo(){
        return this.tabGame;
    }

    setTabGameSolo(g:Game[] | null){
        this.tabGameSolo=g;
    }

    getTabGameMulti(){
        return this.tabGameMulti;
    }

    setTabGameMulti(g:Game[] | null){
        this.tabGameMulti=g;
    }

    getLoaderGame(){
        return this.loaderGame;
    }

    setLoaderGame(l:ILoaderGame){
        this.loaderGame=l;
    }

}