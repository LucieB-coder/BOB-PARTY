import { Conversation } from "../../core/conversation";
import { Match } from "../../core/Match/match";
import { Skin } from "../../core/skin";
import { User } from "../../core/User/user";
import ILoaderUser from "./ILoaderUser";

class Test{
    public completed:boolean;
    public id: number;
    public title: String;
    public userId: number;

    constructor(completed: boolean, id:number, title:String, userId: number){
        this.completed=completed;
        this.id=id;
        this.title=title;
        this.userId=userId;
    }
}

export default class LoaderUserApi implements ILoaderUser{

    private axios = require('axios').default;


    async loadAllUser() : Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    
    async loadByID(id: number): Promise<User | null> {
        let us:User | null=null;
        const url='http://localhost:8888/api-rest/index.php/getUserById/'+ id;
        await this.axios({
            method: 'get',
            url: url,
         })
         .then(function (response: any) {
            if (response.data != null && response.data != undefined){
                us=JsonToUser(response);
            }
        });
        return us;
    }


    async loadByUsername(username: string): Promise<User | null> {
        let us:User | null=null;
        const url='http://localhost:8888/api-rest/index.php/getUserByUsername/'+ username;
        await this.axios({
            method: 'get',
            url: url,
         })
         .then(function (response: any) {
            if (response.data != null && response.data != undefined){
                us=JsonToUser(response);
            }
        });
        return us;
    }

    async loadByUsernamePassword(username: string, password: string): Promise<User | null>{
        let us:User | null=null;
        const url='http://localhost:8888/api-rest/index.php/getUserForConnection/'+ username + "/" + password;
        await this.axios({
            method: 'get',
            url: url,
         })
         .then(function (response: any) {
            if (response.data != null && response.data != undefined){
                us=JsonToUser(response);
            }
        });
        return us;
    }

    async loadUserByMatch(m: Match): Promise<User[]> {
        throw new Error("Method not implemented.");
    }


    async loadUserByConversation(c: Conversation): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    
}
function JsonToUser(response: any): User{
    const tabSkin:Skin[]=[];
    response.data.tabSkin.forEach((skins: { id: number; name: string; source: string; cost: number; }) => {
        tabSkin.push(new Skin(skins.id, skins.name, skins.source, skins.cost));
    });
    const skin=new Skin(response.data.currentSkin.id, response.data.currentSkin.name, response.data.currentSkin.source, response.data.currentSkin.cost);
    return new User(response.data.id, response.data.username, response.data.password, response.data.nationality, response.data.sexe, new Date(response.data.dateOfBirth), response.data.currentCoins, response.data.totalCoins, response.data.nbGamesPlayed, skin, tabSkin);
                
}

