import { Message } from "./message"
import { User } from "./user";


export class conversation{
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


}

