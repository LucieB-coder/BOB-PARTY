import { Conversation } from "../../core/conversation";
import { Message } from "../../core/message";
import { User } from "../../core/User/user";

export default interface ISaverConversation{

    /**
     * saveConversation methode that save a Conversation in the data management system
     * c the Conversation we want to save
     */

    saveConversation(name: string, user:User, tabId:number[], firstMessage:string, messageDate:Date): Promise<Conversation | null>;

    /**
     * deleteConversation methode that delete a Conversation in the data management system
     * c the Conversation we want to delete
     */
    deleteConversation(c:Conversation): Promise<void>;

    /**
     * updateConversation methode that update a Conversation in the data management system
     * c the Conversation we want to update
     */
    updateConversation(c:Conversation): Promise<void>;

    /**
     * addMessage methode that add a Message to a Conversation in the data management system
     * c the Conversation we want to update
     * content the content of the Message
     * id the id of the Sender
     */
    addMessage(idConv:number, content: string, messageDate:Date, user: User): Promise<Message | null>;

    addUserToConversation(c:Conversation, id:number): Promise<void>;

    deleteUserToConversation(c:Conversation, u:User): Promise<void>;

}