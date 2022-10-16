import { Message } from "./core/message"
import { Conversation } from "./core/conversation"
import tabSkinApp from './constSkin'
import { User } from "./core/user";


let UserActu:User=new User("14", "leBg", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, tabSkinApp[0], tabSkinApp, undefined);
let UserTest:User=new User("48", "Wesh Wesh", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, tabSkinApp[1], tabSkinApp, undefined);

let tabMessageTest:Message[]=[
    new Message("Salut", UserActu, new Date(2022,12,12)),
    new Message("Wesh", UserTest, new Date(2022,12,13)),
    new Message("Ca va", UserActu, new Date(2022,12,14)),
    new Message("Ouais et toi?", UserTest, new Date(2022,12,15)),
]

let tabUS:User[]=[UserActu, UserTest];

let conv = new Conversation(tabUS, tabMessageTest, "le super nom");

let tabConv:Conversation[]=[conv];

export default tabConv;


