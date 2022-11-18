import { Conversation } from "../../core/conversation";
import { User } from "../../core/User/user";

export default interface ILoaderConversation{

    /**
     * loadAllConversation methode that load every Conversation in the data management system
     * return an array of Conversation
     */
    loadAllConversation(): Conversation[];

    /**
     * loadByID methode that load an array of Conversation from the data management system by its id
     * id the id we want to search
     * return a Conversation if found, if not null
     */
    loadByID(id:string): Conversation | null;

    /**
     * loadByUser methode that load an array of Conversation from the data management system using a user
     * u the user we want the conversations of
     * return an array of Conversation
     */
    loadByUser(u:User): Conversation[];
}