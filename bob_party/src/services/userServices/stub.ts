import { Conversation } from "../../core/conversation";
import { Match } from "../../core/match";
import { Skin } from "../../core/skin";
import { User } from "../../core/User/user";
import ILoaderUser from "./ILoaderUser";

export default class StubUser implements ILoaderUser{

    tabUS:User[]=[
        new User("14", "leBg", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)]),
        new User("48", "WeshWesh", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)]),
        new User("17", "Alban", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)],),
        new User("17", "Fefe63", "jesuishm", "ouioui", "homme", new Date(2022,12,12), 12222, 123324, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)]),
    ];

    loadAllUser(): User[] {
        return this.tabUS;
    }
    loadByID(id: string): User | null {
        for(let u of this.tabUS){
            if (u.getId()==id){
                return u;
            }
        }
        return null;
    }
    loadByUsername(username: string): User | null {
        for(let u of this.tabUS){
            if (u.getUsername()==username){
                return u;
            }
        }
        return null;
    }
    loadByUsernamePassword(username: string, password: string): User | null {
        for(let u of this.tabUS){
            if (u.getUsername()==username && u.getPassword()==password){
                return u;
            }
        }
        return null;
    }

    loadUserByMatch(m: Match): User[] {
        let tabUser:User[]=[];
        m.getTabUsers().forEach(u => {
            tabUser.push(u);
        });
        return tabUser;
    }
    laodUserByConversation(c: Conversation): User[] {
        let tabUser:User[]=[];
        c.getTabUser().forEach(u => {
            tabUser.push(u);
        });
        return tabUser;
    }
    
}