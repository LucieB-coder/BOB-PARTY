import { Conversation } from "../../core/conversation";
import { Message } from "../../core/message";
import IDataManagerMessage from "../IDataManagerMessage";

export default class DataManagerMessageStub implements IDataManagerMessage{
    createMessage(m: Message): void {
        throw new Error("Method not implemented.");
    }
    getMessageFromConversation(c: Conversation): Message[] {
        throw new Error("Method not implemented.");
    }

}