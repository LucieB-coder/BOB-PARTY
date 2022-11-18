import { Message } from "../../../core/message";

export default interface ISaverMessage{

    /**
     * saveMessage methode that save a Message in the data management system
     * m the Message we want to save
     */

    saveMessage(m:Message): Promise<void>;

}