import { User } from './User/user'


export class Message{
    private id: number;
    private content: string;
    private sender: User;
    private dateEnvoie: Date;

    /* Constructor of the class */
    constructor(id: number, content: string, sender:User, dateEnvoie:Date){
        this.id=id;
        this.content=content;
        this.sender=sender;
        this.dateEnvoie=dateEnvoie;
    }
    
    /* Brief : Function setting the content of a message */
    setMessageContent(content: string){
        this.content=content;
    }

    /* Brief : Function setting the sender of a message */
    setMessageSender(sender: User){
        this.sender=sender;
    }

    /* Brief : Function setting the date of a message */
    setMessageDate(dateEnvoie: Date){
        this.dateEnvoie=dateEnvoie;
    }

    /* Brief : Function getting the id of a message */
    getMessageId(){
        return this.id;
    }

    /* Brief : Function getting the content of a message */
    getMessageContent(){
        return this.content;
    }

    /* Brief : Function getting the sender of a message */
    getMessageSender(){
        return this.sender;
    }

    /* Brief : Function getting the date of a message */
    getMessageDate(){
        return this.dateEnvoie;
    }


}