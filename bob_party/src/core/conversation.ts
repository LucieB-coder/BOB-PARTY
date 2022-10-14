import { Message } from "./message"
import { User } from "./user";


export class Conversation{
    private TabUser?: User[];
    private TabMessage?: Message[];
    
    constructor(tabUser: User[], tabMessage:Message[]){
        this.TabUser=[...tabUser];
        this.TabMessage=[...tabMessage];
    }

    getTabMessage(){
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
    }

}

