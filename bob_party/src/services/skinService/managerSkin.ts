import { Skin } from "../../core/skin";
import ILoaderSkin from "./ILoaderSkin";

export default class ManagerSkin{

    private tabSkin: Skin[]=[];

    private loaderSkin: ILoaderSkin;

    constructor(loader:ILoaderSkin){
        this.loaderSkin=loader;
    }

    getTabSkin(){
        return this.tabSkin;
    }

    setTabSkin(tab:Skin[]){
        this.tabSkin=tab;
    }

    getLoaderSkin(){
        return this.loaderSkin;
    }


}