import tabSkinApp from './constSkin'
import { User } from "./core/User/user";


let UserActu:User=new User(14, "leBg", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, tabSkinApp[0], tabSkinApp);
let Alban:User=new User(17, "Alban", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, tabSkinApp[1], tabSkinApp);
let Fefe63:User=new User(18, "Fefe63", "jesuishm", "ouioui", "homme", new Date(2022,12,12), 12222, 123324, 12, tabSkinApp[6], tabSkinApp);
let UserTest:User=new User(48, "WeshWesh", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, tabSkinApp[2], tabSkinApp);


let tabUS:User[]=[UserTest, Alban, UserActu, Fefe63];

export default tabUS;