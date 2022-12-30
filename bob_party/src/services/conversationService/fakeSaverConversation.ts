import { Conversation } from "../../core/conversation";
import { Message } from "../../core/message";
import { User } from "../../core/User/user";
import ISaverConversation from "./ISaverConversation";

export class FakeSaverConversation implements ISaverConversation{
    
    addMessage(idConv: number, content: string, messageDate: Date, user: User): Promise<Message | null> {
        throw new Error("Method not implemented.");
    }

    saveConversation(name: string, user: User, id: number[]): Promise<Conversation | null> {
        throw new Error("Method not implemented.");
    }
    addUserToConversation(c: Conversation, id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteUserToConversation(c: Conversation, u: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

   
    async deleteConversation(c: Conversation): Promise<void> {
        return;
    }
    async updateConversation(c: Conversation): Promise<void> {
        return;
    }
}