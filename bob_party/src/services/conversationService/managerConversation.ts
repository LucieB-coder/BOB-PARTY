import { Conversation } from "../../core/conversation";
import ILoaderConversation from "./ILoaderConversation";
import ISaverConversation from "./ISaverConversation";

export default class ManagerConversation{

    private currentConv:Conversation | null= null;

    private tabConv:Conversation[]=[];

    private loaderConversation: ILoaderConversation;

    private saverConversation: ISaverConversation;

    constructor(loaderConversation:ILoaderConversation, saverConversation:ISaverConversation){
        this.loaderConversation=loaderConversation;
        this.saverConversation=saverConversation;
    }

    getCurrentConv(){
        return this.currentConv;
    }

    setCurrentConv(c:Conversation | null){
        this.currentConv=c;
    }

    getTabConv(){
        return this.tabConv;
    }

    setTabConv(c:Conversation[]){
        this.tabConv=c;
    }

    getLoaderConversation(){
        return this.loaderConversation;
    }

    getsaverConversation(){
        return this.saverConversation;
    }
}