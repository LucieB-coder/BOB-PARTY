import { Message } from "./core/message"
import { Conversation } from "./core/conversation"
import tabSkinApp from './constSkin'
import { User } from "./core/User/user";
import tabConv from "./constCov";


let UserActu:User=new User("14", "leBg", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, tabSkinApp[0], tabSkinApp, undefined);
let UserTest:User=new User("48", "WeshWesh", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, tabSkinApp[2], tabSkinApp, undefined);
let Alban:User=new User("17", "Alban", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, tabSkinApp[1], tabSkinApp, tabConv);
let Fefe63:User=new User("17", "Fefe63", "jesuishm", "ouioui", "homme", new Date(2022,12,12), 12222, 123324, 12, tabSkinApp[6], tabSkinApp, undefined);

let tabUS:User[]=[UserActu, UserTest, Alban, Fefe63];

export default tabUS;