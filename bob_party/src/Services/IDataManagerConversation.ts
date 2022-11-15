import { Conversation } from "../core/conversation";
import { User } from "../core/User/user";

export default interface IDataManagerConversation{

    createConversation(c:Conversation): void;

    getConversationFromUser(u:User): Conversation[];

    deleteConversation(c:Conversation): void;

    updateConversation(c:Conversation): void;

}

