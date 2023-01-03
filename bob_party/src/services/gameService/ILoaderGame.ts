import { Game } from "../../core/game";

export default interface ILoaderGame{

    /**
     * loadAllGame methode that load every Game from the data management system
     * return an array of Game
     */
    loadAllGames(): Promise<Game[]>;

    /**
     * loadByID methode that load a match from the data management system by its id
     * id the id we want to search
     * return a Game if found, if not null
     */
    loadByID(id:string): Promise<Game | null>;
}