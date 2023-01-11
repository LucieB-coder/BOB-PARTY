import { MANAGER_USER } from "../../../appManagers";
import { Skin } from "../../core/Skin";
import { User } from "../../core/User/user";
import ISaverUser from "./ISaverUser";


export default class SaverUserApi implements ISaverUser{

    private axios = require('axios').default;

    private baseUrl = "https://codefirst.iut.uca.fr/containers/BOB_PARTEAM-api-bobParty/index.php/"

    async saveUser(username:string, password:string, nationality:string, sexe:string, date:Date): Promise<User | null> {
        let us:User|null=null;
        const url=this.baseUrl + 'postUser/'+ username + "/" + password + "/" + nationality + "/" + sexe + "/" + date.toISOString().split('T')[0] ;
        await this.axios({
            method: 'post',
            url: url,
        }).then(async function () {
            us = await MANAGER_USER.getLoaderUser().loadByUsername(username);
        });
        return us;
    }
    async deleteUser(u: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async updateUser(u: User): Promise<void> {
        let us:User|null=null;
        const url=this.baseUrl + 'putUser/'+ u.getId() + "/" + u.getUsername()  + "/" + u.getPassword() + "/" + u.getSexe() + "/" + u.getNationality() + "/" + u.getCurrentCoins() + "/" + u.getTotalCoins() + "/" + u.getGamesPlayed() + "/" + u.getCurrentSkin().getSkinId();
        await this.axios({
            method: 'put',
            url: url,
        });
    }

    async addSkinList(u: User, s:Skin): Promise<void> {
        let us:User|null=null;
        const url=this.baseUrl + 'putSkinList/'+ u.getId() + "/" + s.getSkinId();
        await this.axios({
            method: 'put',
            url: url,
        });
    }

}