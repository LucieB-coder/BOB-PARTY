import { Match } from "../../core/match";

export default interface ISaverMatch{

    /**
     * saveMatch methode that save a Match in the data management system
     * m the Match we want to save
     */

    saveMatch(m:Match): void;

    /**
     * deleteMatch methode that delete a Match in the data management system
     * m the Match we want to delete
     */
    deleteMatch(m:Match):void;

    /**
     * updateMatch methode that update a Match in the data management system
     * m the Match we want to update
     */
    updateMatch(m:Match): void;
}