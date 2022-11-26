import { Message } from "./message"
import { User } from "./User/user";


export class Conversation{
    private Id: string;
    private tabUser: User[];
    private tabMessage: Message[];
    private name: string;
    
    /* Constructor of the class */
    constructor(id: string, tabUser: User[], tabMessage:Message[], name:string){
        this.Id=id;
        this.tabUser=[...tabUser];
        this.tabMessage=[...tabMessage];
        this.name=name;
    }

    /* Brief : function returning the messages of a conversation */
    getTabMessage(){
        this.sortMessageDesc();
        return this.tabMessage;
    }

    /* Brief : function returning the users of a conversation */
    getTabUser(){
        return this.tabUser;
    }

    /* Brief : function adding an user to a conversation */
    ajouterUser(us:User){
        this.tabUser?.push(us);
    }

    /* Brief : function adding a message to a conversation */
    ajouterMessage(mess:Message){
        this.tabMessage?.push(mess);
        this.sortMessageDesc();
    }

    /* Brief : function returning the id of a conversation */
    getId(){
        return this.Id;
    }

    /* Brief : function returning the name to a conversation */
    getName(){
        return this.name;
    }

    /* Brief : function setting the name to a conversation */
    setName(name:string){
        this.name=name;
    }

    /* Brief : function returning the last message of a conversation */
    getLastMessage(){
        this.sortMessageDesc();
        return this.tabMessage[0];
    }

    /* Brief : function sorting the messages of a conversation to be in the discussion order */
    sortMessageDesc(){
        this.tabMessage.sort(
            (objA, objB) => objB.getMessageDate().getTime() - objA.getMessageDate().getTime(),
        );
    }

}


