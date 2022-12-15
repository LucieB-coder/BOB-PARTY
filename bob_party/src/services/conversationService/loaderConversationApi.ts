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
        await this.axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            params: {
                name: "getConversationByUser",
                //Les params genre nom de la fonction en php
              }
         })
         .then(function (response: any) {
            let skin= new Skin(1, "Bob","https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/BobsSkins/BobClassic.png", 0);
            let skin2= new Skin(1, "Bob","https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/BobsSkins/BobBlue.png", 0);
            let user1 = new User(1, "Alban", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, skin, [skin]);
            let user2 = new User(3, "Fefe63", "jesuishm", "ouioui", "homme", new Date(2022,12,12), 12222, 123324, 12, skin2, [skin]);
            tabConv=[new Conversation(1, 
                [user1, user2],
                [
                new Message(1, "bonjour", user1, new Date(2022,12,12)), 
                new Message(2, "test", user2, new Date(2022,12,13)),
                new Message(3, "Je m'appelle alban et j'aime trop faire les messages quand ça marche mais ya encore qq trucs qui marche pas donc un peu cool mais pas trop", user1, new Date(2022,12,14)), 
                new Message(4, "Fefe63 est dans la place", user2, new Date(2022,12,15)), 
                ]
                , user1.getUsername()+user2.getUsername())];
        });
        return tabConv;
    }

}