import { Match } from "../../core/match";

export default interface ILoaderMatch{

    /**
     * loadAllMatch methode that load every Match from the data management system
     * return an array of Match
     */
    loadAllMatch(): Promise<Match[]>;

    /**
     * loadByID methode that load a match from the data management system by its id
     * id the id we want to search
     * return a Match if found, if not null
     */
    loadByID(id:string): Promise<Match | null>;
}