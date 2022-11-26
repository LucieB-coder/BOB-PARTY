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
            tabConv=[new Conversation("C0001", 
            [new User("U0001", "Alban", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)]),
            new User("U0002", "Fefe63", "jesuishm", "ouioui", "homme", new Date(2022,12,12), 12222, 123324, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)]),],
            [new Message("M0001", "bonjour", new User("U0001", "Alban", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)]), new Date(2022,12,12)),
            new Message("M0002", "test", new User("U0002", "Fefe63", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, new Skin("S0002", "Bob Blue",require('bob_party/assets/BobsSkins/BobBlue.png'), 100), [new Skin("S0002", "Bob Blue",require('bob_party/assets/BobsSkins/BobBlue.png'), 100)]), new Date(2022,12,13))], "leNom")];
        });
        return tabConv;
    }

}