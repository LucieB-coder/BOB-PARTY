import { Conversation } from "../../core/conversation";
import { User } from "../../core/User/user";
import ILoaderConversation from "./ILoaderConversation";
import ISaverConversation from "./ISaverConversation";

export default class ManagerConversation{

    private currentTabConv:Conversation[]=[];

    private loaderConversation: ILoaderConversation;

    private saverConversation: ISaverConversation;

    constructor(loaderConversation:ILoaderConversation, saverConversation:ISaverConversation){
        this.loaderConversation=loaderConversation;
        this.saverConversation=saverConversation;
    }

    getCurrentTabConv(){
        return this.currentTabConv;
    }

    setCurrentTabConv(c:Conversation[]){
        this.currentTabConv=c;
    }

    getLoaderConversation(){
        return this.loaderConversation;
    }

    getsaverConversation(){
        return this.saverConversation;
    }
}