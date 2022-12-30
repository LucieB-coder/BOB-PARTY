import { Skin } from "../../core/skin";

export default interface ILoaderSkin{

    /**
     * loadAllSkin methode that load every Skin from the data management system
     * return an array of Skin
     */
    loadAllSkin(): Promise<Skin[]>;

    /**
     * loadByID methode that load a Skin from the data management system by its id
     * id the id we want to search
     * return a Skin if found, if not null
     */
    loadByID(id:number): Promise<Skin | null>;
}