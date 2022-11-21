import { User } from './User/user'


export class Message{
    private Id: string;
    private Content: string;
    private Sender: User;
    private DateEnvoie: Date;

    /* Constructor of the class */
    constructor(id: string, content: string, sender:User, dateEnvoie:Date){
        this.Id=id;
        this.Content=content;
        this.Sender=sender;
        this.DateEnvoie=dateEnvoie;
    }
    
    /* Brief : Function setting the content of a message */
    setMessageContent(content: string){
        this.Content=content;
    }

    /* Brief : Function setting the sender of a message */
    setMessageSender(sender: User){
        this.Sender=sender;
    }

    /* Brief : Function setting the date of a message */
    setMessageDate(dateEnvoie: Date){
        this.DateEnvoie=dateEnvoie;
    }

    /* Brief : Function getting the id of a message */
    getMessageId(){
        return this.Id;
    }

    /* Brief : Function getting the content of a message */
    getMessageContent(){
        return this.Content;
    }

    /* Brief : Function getting the sender of a message */
    getMessageSender(){
        return this.Sender;
    }

    /* Brief : Function getting the date of a message */
    getMessageDate(){
        return this.DateEnvoie;
    }


}