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
            tabConv=[new Conversation(1, 
            [new User(1, "Alban", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, skin, [skin]),
            new User(3, "Fefe63", "jesuishm", "ouioui", "homme", new Date(2022,12,12), 12222, 123324, 12, skin, [skin])],
            [new Message(1, "bonjour", new User(1, "Alban", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, skin, [skin]), new Date(2022,12,12)),
            new Message(2, "test", new User(2, "Fefe63", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, skin, [skin]), new Date(2022,12,13))], "leNom")];
        });
        return tabConv;
    }

}