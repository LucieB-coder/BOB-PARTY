import { Conversation } from "../../core/conversation";
import { Message } from "../../core/message";
import { Skin } from "../../core/Skin";
import { User } from "../../core/User/user";
import IManager from "../IManager";
import DataManagerConversationStub from "./DataManagerConversationStub";
import DataManagerMatchStub from "./DataManagerMatchStub";
import DataManagerMessageStub from "./DataManagerMessageStub";
import DataManagerUserStub from "./DataManagerUserStub";

export default class extends IManager{
    currentUser: User|null=null;
    

    /*
    tabAllSkin: Skin[]=[
        new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0),
        new Skin("S0002", "Bob Blue",require('bob_party/assets/BobsSkins/BobBlue.png'), 100),
        new Skin("S0003", "Bob BW",require('bob_party/assets/BobsSkins/BobBW.png'), 100),
        new Skin("S0004", "Bob Green",require('bob_party/assets/BobsSkins/BobGreen.png'), 100),
        new Skin("S0005", "Bob P&T",require('bob_party/assets/BobsSkins/BobPinkTurquoise.png'), 100),
        new Skin("S0006", "Bob Red",require('bob_party/assets/BobsSkins/BobRed.png'), 100),
        new Skin("S0007", "Bob Cute",require('bob_party/assets/BobsSkins/BobYellowGreenBlueHeart.png'), 100),
    ]

    

    tabAllMessage: Message[]= [
        new Message("Salut", this.tabAllUser[1], new Date(2022,12,12,11,30,40)),
        new Message("Wesh", this.tabAllUser[0], new Date(2022,12,13,12,20,40)),
        new Message("Ca va", this.tabAllUser[1], new Date(2022,12,14, 12, 30, 35)),
        new Message("Ouais et toi?", this.tabAllUser[0], new Date(2022,12,14,12,35,0)),
        new Message("Coucou", this.tabAllUser[3], new Date(2022,12,14,12,35,0)),
    ]

    tablAllConersation: Conversation[]=[
        new Conversation([this.tabAllUser[1],this.tabAllUser[0] ], [this.tabAllMessage[0], this.tabAllMessage[1], this.tabAllMessage[2], this.tabAllMessage[3]], "le super nom")
    ]

    */

    constructor(){
        super(new DataManagerConversationStub, new DataManagerMessageStub, new DataManagerMatchStub, new DataManagerUserStub);
    }

}