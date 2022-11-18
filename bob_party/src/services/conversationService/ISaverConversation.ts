import { Conversation } from "../../../core/conversation";

export default interface ISaverConversation{

    /**
     * saveConversation methode that save a Conversation in the data management system
     * c the Conversation we want to save
     */

    saveConversation(c:Conversation): void;

    /**
     * deleteConversation methode that delete a Conversation in the data management system
     * c the Conversation we want to delete
     */
    deleteConversation(c:Conversation):void;

    /**
     * updateConversation methode that update a Conversation in the data management system
     * c the Conversation we want to update
     */
    updateConversation(c:Conversation): void;
}