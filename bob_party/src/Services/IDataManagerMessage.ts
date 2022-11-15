import { Conversation } from "../core/conversation";
import { Message } from "../core/message";

export default interface IDataManagerMessage{

    createMessage(m: Message): void;

    getMessageFromConversation(c:Conversation): Message[];

}

