import { Game } from "../../core/game";
import { Match } from "../../core/Match/match";
import { User } from "../../core/User/user";

export default interface ISaverMatch{

    /**
     * saveMatch methode that save a Match in the data management system
     * m the Match we want to save
     */

    saveMatch(u:User, g:Game | undefined): Promise<Match>;

    /**
     * deleteMatch methode that delete a Match in the data management system
     * m the Match we want to delete
     */
    deleteMatch(m:Match): Promise<void>;

    /**
     * updateMatch methode that update a Match in the data management system
     * m the Match we want to update
     */
    updateMatch(m:Match): Promise<void>;
}