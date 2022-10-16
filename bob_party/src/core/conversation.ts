import { Message } from "./message"
import { User } from "./user";


export class Conversation{
    private TabUser: User[];
    private TabMessage: Message[];
    private Name?: string;
    
    constructor(tabUser: User[], tabMessage:Message[], name?:string){
        this.TabUser=[...tabUser];
        this.TabMessage=[...tabMessage];
        this.Name=name;
    }

    getTabMessage(){
        this.sortMessageDesc();
        return this.TabMessage;
    }

    getTabUser(){
        return this.TabUser;
    }

    ajouterUser(us:User){
        this.TabUser?.push(us);
    }

    ajouterMessage(mess:Message){
        this.TabMessage?.push(mess);
        this.sortMessageDesc();
    }

    getName(){
        return this.Name;
    }

    setName(name:string){
        this.Name=name;
    }

    getLastMessage(){
        this.sortMessageDesc();
        return this.TabMessage[0];
    }

    sortMessageDesc(){
        this.TabMessage.sort(
            (objA, objB) => objB.getMessageDate().getTime() - objA.getMessageDate().getTime(),
        );
    }

}


