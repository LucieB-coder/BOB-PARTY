import { Message } from "./message"
import { User } from "./user";


export class Conversation{
    private TabUser: User[];
    private TabMessage: Message[];
    private Name: string;
    
    /* Constructor of the class */
    constructor(tabUser: User[], tabMessage:Message[], name:string){
        this.TabUser=[...tabUser];
        this.TabMessage=[...tabMessage];
        this.Name=name;
    }

    /* Brief : function returning the messages of a conversation */
    getTabMessage(){
        this.sortMessageDesc();
        return this.TabMessage;
    }

    /* Brief : function returning the users of a conversation */
    getTabUser(){
        return this.TabUser;
    }

    /* Brief : function adding an user to a conversation */
    ajouterUser(us:User){
        this.TabUser?.push(us);
    }

    /* Brief : function adding a message to a conversation */
    ajouterMessage(mess:Message){
        this.TabMessage?.push(mess);
        this.sortMessageDesc();
    }

    /* Brief : function returning the name to a conversation */
    getName(){
        return this.Name;
    }

    /* Brief : function setting the name to a conversation */
    setName(name:string){
        this.Name=name;
    }

    /* Brief : function returning the last message of a conversation */
    getLastMessage(){
        this.sortMessageDesc();
        return this.TabMessage[0].getMessageContent();
    }

    /* Brief : function sorting the messages of a conversation to be in the discussion order */
    sortMessageDesc(){
        this.TabMessage.sort(
            (objA, objB) => objB.getMessageDate().getTime() - objA.getMessageDate().getTime(),
        );
    }

}


