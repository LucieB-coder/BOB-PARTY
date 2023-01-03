import { Conversation } from "../../core/conversation";
import { GameSolo } from "../../core/gameSolo";
import { Match } from "../../core/Match/match";
import MatchSolo from "../../core/Match/matchSolo";
import { Skin } from "../../core/skin";
import { User } from "../../core/User/user";
import ILoaderUser from "./ILoaderUser";

export default class StubUser implements ILoaderUser{

    skin:Skin=new Skin(1, "Bob","https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/BobsSkins/BobClassic.png", 0);

    tabUS:User[]=[
        new User(1, "leBg", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, this.skin, [this.skin]),
        new User(2, "WeshWesh", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, this.skin, [this.skin]),
    ];

    convo:Conversation = new Conversation(1, this.tabUS, [], 'superConvo');

    map = new Map<number, number>([
        [50, 3],
        [75, 4],
        [100, 5],
        [150, 6]
    ]);

    game:GameSolo = new GameSolo(1, 'SuperJeu', "", 1, 1, this.map);

    match:Match = new MatchSolo(1, false, this.tabUS, this.game);

    async loadAllUser(): Promise<User[]> {
        return this.tabUS;
    }
    async loadByID(id: number): Promise<User | null> {
        for(let u of this.tabUS){
            if (u.getId()==id){
                return u;
            }
        }
        return null;
    }
    async loadByUsername(username: string): Promise<User | null> {
        for(let u of this.tabUS){
            if (u.getUsername()==username){
                return u;
            }
        }
        return null;
    }
    async loadByUsernamePassword(username: string, password: string): Promise<User | null> {
        for(let u of this.tabUS){
            if (u.getUsername()==username && u.getPassword()==password){
                return u;
            }
        }
        return null;
    }

    async loadUserByMatch(m: Match): Promise<User[]> {
        let tabUser:User[]=[];
        m.getTabUsers().forEach(u => {
            tabUser.push(u);
        });
        return tabUser;
    }

    async loadUserByConversation(c: Conversation): Promise<User[]> {
        let tabUser:User[]=[];
        c.getTabUser().forEach(u => {
            tabUser.push(u);
        });
        return tabUser;
    }
    
}