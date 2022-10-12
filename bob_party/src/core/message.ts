import { User } from './user'


export class Message{
    private Content: string;
    private Sender: User;
    private DateEnvoie: Date;

    constructor(content: string, sender:User, dateEnvoie:Date){
        this.Content=content;
        this.Sender=sender;
        this.DateEnvoie=dateEnvoie;
    }
    
    setMessageContent(content: string){
        this.Content=content;
    }

    setSMessageSender(sender: User){
        this.Sender=sender;
    }

    setSMessageDate(dateEnvoie: Date){
        this.DateEnvoie=dateEnvoie;
    }

    getMessageContent(){
        return this.Content;
    }

    getMessageSender(){
        return this.Sender;
    }

    getMessageDate(){
        return this.DateEnvoie;
    }


}