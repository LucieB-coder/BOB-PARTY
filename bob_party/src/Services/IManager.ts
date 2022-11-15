import IDataManagerConversation from "./IDataManagerConversation";
import IDataManagerMatch from "./IDataManagerMatch";
import IDataManagerMessage from "./IDataManagerMessage";
import IDataManagerUser from './IDataManagerUser';

export default abstract class Manager{
    managerConversation: IDataManagerConversation;
    managerMessage: IDataManagerMessage;
    managerMatch: IDataManagerMatch;
    managerUser: IDataManagerUser;

    constructor(managerConversation: IDataManagerConversation, managerMessage: IDataManagerMessage, managerMatch: IDataManagerMatch, managerUser: IDataManagerUser){
        this.managerConversation=managerConversation;
        this.managerMessage=managerMessage;
        this.managerMatch=managerMatch;
        this.managerUser=managerUser;
    }
}