import { each } from "jquery";
import { MANAGER_USER } from "../../../appManagers";
import { Conversation } from "../../core/conversation";
import { Message } from "../../core/message";
import { User } from "../../core/User/user";
import ISaverConversation from "./ISaverConversation";

export class SaverConversationApi implements ISaverConversation{
    
    private axios = require('axios').default;

    private baseUrl = "https://codefirst.iut.uca.fr/containers/BOB_PARTEAM-api-bobParty/index.php/"

    async saveConversation(name: string, user:User, tabId:number[], firstMessage:string, messageDate:Date): Promise<Conversation | null>{

        let conv:Conversation | null=null;
        let url= this.baseUrl + 'postConversation/' + name + "/" +user.getId();
        tabId.forEach(id => {
            url=url + "," + id; 
        });
        await this.axios({
            method: 'post',
            url: url,
         })
         .then(async (response: any) => {
            let tabUser:User[]=[];
            const id=response.data;
            const message:Message|null=await this.addMessage(id, firstMessage, messageDate, user);
            let end=new Promise<void>((resolve, reject) => {
                tabId.forEach(async id => {
                    let tmp:User|null=await MANAGER_USER.getLoaderUser().loadByID(id);
                    if (tmp!=null){
                        tabUser.push(tmp);
                    }
                    if (tabUser.length===tabId.length){
                        resolve();
                    }
                });
            });
            await Promise.all([end]);
            if (message!=null){
                conv=new Conversation(id, tabUser, [message], name);
            }
        });
        return conv;
    }



    async addMessage(idConv:number, content: string, messageDate:Date, user: User): Promise<Message | null> {
        let message:Message | null=null;
        let url=this.baseUrl+ 'addMessageToConversation/' + content + "/" + user.getId() + "/" + idConv + "/" + messageDate.toISOString().split('T')[0] + " " + messageDate.getHours() + ":" + messageDate.getMinutes() + ":" + messageDate.getSeconds();
        await this.axios({
            method: 'put',
            url: url,
         })
         .then(async (response: any) => {
            const id=response.data;
            message=new Message(id, content, user, messageDate);
        });
        return message;    
    }

    async addUserToConversation(c: Conversation, id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deleteUserToConversation(c: Conversation, u: User): Promise<void> {
        let url=this.baseUrl+'deleteUserFromConversation/' + c.getId() + "/" +u.getId();
        await this.axios({
            method: 'put',
            url: url,
        });
    }

    
    async deleteConversation(c: Conversation): Promise<void> {
        let url=this.baseUrl+'deleteConversation/' + c.getId();
        await this.axios({
            method: 'delete',
            url: url,
        });    
    }
    
    async updateConversation(c: Conversation): Promise<void> {
        return;
    }
}


async function jsonToConversation(response:any) {
    let conv:Conversation | null=null;
    const tabUser:User[]=[];
    const tabMessage:Message[]=[];
    let first = new Promise<void>((resolve,reject) => {
        response.data.listIdUsers.forEach(async (id: number) => {
            const user:User | null= await MANAGER_USER.getLoaderUser().loadByID(id);
            if (user!=null){
                tabUser.push(user);
            }
            if(response.data.listIdUsers.length===tabUser.length){
                resolve();
            }
        });
    });

    let second= new Promise<void> ((resolve, reject) => {
        response.data.tabMessages.forEach(async (message: { idSender: number; id: number; content: string; dateEnvoie: string | number | Date; }) => {
            const sender:User | null= await MANAGER_USER.getLoaderUser().loadByID(message.idSender);
            if (sender!=null){
                tabMessage.push(new Message(message.id, message.content, sender, new Date(message.dateEnvoie)));
            }
            if(response.data.tabMessages.length===tabMessage.length){
                resolve();
            }
        });
    });
    await Promise.all([first, second]);
    conv = new Conversation(response.data.id, tabUser, tabMessage, response.data.name);
    return conv;         
}