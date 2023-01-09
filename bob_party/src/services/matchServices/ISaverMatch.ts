import { Game } from "../../core/game";
import { Match } from "../../core/Match/match";
import { User } from "../../core/User/user";

export default interface ISaverMatch{

    /**
     * saveMatch methode that save a Match in the data management system
     * m the Match we want to save
     */

    saveMatch(u:User, g:Game): Promise<Match>;

    /**
     * deleteMatch methode that delete a Match in the data management system
     * m the Match we want to delete
     */
    deleteMatch(m:Match): Promise<void>;

    /**
     * deleteUserFromMatch methode that delete a User from a Match in the data management system
     * u the User we want to delete
     */
     deleteUserFromMatch(u:User): Promise<void>;

    /**
     * joinMatch methode that add a User to a Match in the data management system
     * u the User we want to add
     * id the id of the Match
     */
     joinMatch(u:User, id:number): Promise<Match | null>;
}