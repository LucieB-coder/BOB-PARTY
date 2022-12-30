import { Skin } from "../../core/skin";
import ILoaderSkin from "./ILoaderSkin";

export default class LoaderSkinApi implements ILoaderSkin{
    
    private axios = require('axios').default;

    /**
     * loadAllSkin methode that load every Skin from the data management system
     * return an array of Skin
     */
    async loadAllSkin(): Promise<Skin[]>{
        let tabSkin: Skin[]=[];
        const url='http://localhost:8888/api-rest/index.php/getSkins';
        await this.axios({
            method: 'get',
            url: url,
         })
         .then(function (response: any) {
            if (response.data != null && response.data != undefined){
                response.data.forEach((skins: { id: number; name: string; source: string; cost: number; }) => {
                    tabSkin.push(new Skin(skins.id, skins.name, skins.source, skins.cost));
                });
            }
        });
        return tabSkin;
    }

    /**
     * loadByID methode that load a Skin from the data management system by its id
     * id the id we want to search
     * return a Skin if found, if not null
     */
    async loadByID(id:number): Promise<Skin | null>{
        let skin: Skin | null= null;
        const url='http://localhost:8888/api-rest/index.php/getSkins';
        await this.axios({
            method: 'get',
            url: url,
         })
         .then(function (response: any) {
            if (response.data != null && response.data != undefined){
                skin=new Skin(response.data.currentSkin.id, response.data.currentSkin.name, response.data.currentSkin.source, response.data.currentSkin.cost);
            }
        });
        return skin;
    }
}