import { Message } from "./message"
import { User } from "./User/user";


export class Conversation{
    private tabUser: User[];
    private tabMessage: Message[];
    private name: string;
    
    /* Constructor of the class */
    constructor(tabUser: User[], tabMessage:Message[], name:string){
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
<<<<<<< HEAD
=======

>>>>>>> fe24058f3896c88fae68bff0b08ab4cb8b61ca2e
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

    /* Brief : function returning the name to a conversation */
    getName(){
<<<<<<< HEAD
=======

>>>>>>> fe24058f3896c88fae68bff0b08ab4cb8b61ca2e
        return this.name;
    }

    /* Brief : function setting the name to a conversation */
<<<<<<< HEAD
=======

>>>>>>> fe24058f3896c88fae68bff0b08ab4cb8b61ca2e
    setName(name:string){
        this.name=name;
    }

    /* Brief : function returning the last message of a conversation */
    getLastMessage(){
        this.sortMessageDesc();
        return this.tabMessage[0].getMessageContent();
    }

    /* Brief : function sorting the messages of a conversation to be in the discussion order */
    sortMessageDesc(){
        this.tabMessage.sort(
            (objA, objB) => objB.getMessageDate().getTime() - objA.getMessageDate().getTime(),
        );
    }

}


