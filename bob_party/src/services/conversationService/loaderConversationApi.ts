import { MANAGER_USER } from "../../../appManagers";
import { Conversation } from "../../core/conversation";
import { Message } from "../../core/message";
import { Skin } from "../../core/skin";
import { User } from "../../core/User/user";
import ILoaderConversation from "./ILoaderConversation";

export class LoaderConversationApi implements ILoaderConversation{

    private axios = require('axios').default;

    loadAllConversation(): Promise<Conversation[]> {
        throw new Error("Method not implemented.");
    }
    loadByID(id: string): Promise<Conversation | null> {
        throw new Error("Method not implemented.");
    }
    async loadByUser(u: User): Promise<Conversation[]> {

        let tabConv:Conversation[]=[];
        const url='http://localhost:8888/api-rest/index.php/getConversations/' +u.getId();
        await this.axios({
            method: 'get',
            url: url,
         })
         .then(async function (response: any) {
            if (response.data != null || response.data != undefined){
                tabConv=await jsonToConversation(response);
            }
        });
        return tabConv;
    }

}

async function jsonToConversation(response:any) {
    const tabConv:Conversation[]=[];
    let end=new Promise<void>((resolve, reject) => {
        response.data.forEach( async (conv: { listIdUsers: any[]; tabMessages: any[]; id: number; name: string; }) => {
            const tabUser:User[]=[];
            const tabMessage:Message[]=[];
            let first = new Promise<void>((resolve,reject) => {
                conv.listIdUsers.forEach(async id => {
                    const user:User | null= await MANAGER_USER.getLoaderUser().loadByID(id);
                    if (user!=null){
                        tabUser.push(user);
                    }
                    if(conv.listIdUsers.length===tabUser.length){
                        resolve();

                    }
                });
                if (conv.listIdUsers.length===0){
                    resolve();

                }
            });

            let second= new Promise<void> ((resolve, reject) => {
                conv.tabMessages.forEach(async message => {
                    const sender:User | null= await MANAGER_USER.getLoaderUser().loadByID(message.idSender);
                    if (sender!=null){
                        
                        tabMessage.push(new Message(message.id, message.content, sender, new Date(message.dateEnvoie)));
                    }
                    if(conv.tabMessages.length===tabMessage.length){
                        resolve();
                    }
                });
                if (conv.tabMessages.length===0){
                    resolve();
                }
            });
            await Promise.all([first, second]);
            tabConv.push(new Conversation(conv.id, tabUser, tabMessage, conv.name));
            if (tabConv.length===response.data.length){
                resolve();
            }
        });
        if (response.data.length==0){
            resolve();
        }
    });
    await Promise.all([end]);
    return tabConv;         
}