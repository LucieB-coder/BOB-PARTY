import { Conversation } from "../../../core/conversation";
import { Message } from "../../../core/message";

export default interface ILoaderMessage{

    /**
     * loadAllMessage methode that load every Message from the data management system
     * return an array of Message
     */
    loadAllMessage(): Message[];

    /**
     * loadByID methode that load a Message from the data management system by its id
     * id the id we want to search
     * return a Message if found, if not null
     */
    loadByID(id:string): Message | null;

    /**
     * loadByUser methode that load an array of Message from the data management system using a Conversation
     * c the Conversation we want the Messages of
     * return an array of Message
     */
    loadByConversation(c:Conversation): Message[];
}