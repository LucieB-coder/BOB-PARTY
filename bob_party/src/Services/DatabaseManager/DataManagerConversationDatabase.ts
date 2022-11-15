import { Conversation } from "../../core/conversation";
import { User } from "../../core/User/user";
import IDataManagerConversation from "../IDataManagerConversation";

export default class DataManagerConversationDatabase implements IDataManagerConversation{
    
    createConversation(c: Conversation): void {
        throw new Error("Method not implemented.");
    }
    getConversationFromUser(u: User): Conversation[] {
        throw new Error("Method not implemented.");
    }
    deleteConversation(c: Conversation): void {
        throw new Error("Method not implemented.");
    }
    updateConversation(c: Conversation): void {
        throw new Error("Method not implemented.");
    }
}