import { Conversation } from "../../core/conversation";
import ISaverConversation from "./ISaverConversation";

export class FakeSaverConversation implements ISaverConversation{
    async saveConversation(c: Conversation): Promise<void> {
        return;
    }
    async deleteConversation(c: Conversation): Promise<void> {
        return;
    }
    async updateConversation(c: Conversation): Promise<void> {
        return;
    }
}