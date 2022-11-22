import { MANAGER_USER } from "../../../App";
import ManagerUser from "../../services/userServices/ManagerUser";
import { User } from "./user";

export class ManagerCoinsUser{


    async addCoins(u:User, coins:number){
        u.setCurrentCoins(u.getCurrentCoins()+coins);
        u.setTotalCoins(u.getTotalCoins()+coins);
        await MANAGER_USER.getsaverUser().updateUser(u);
    }

    async removeCoins(u:User, coins:number){
        u.setCurrentCoins(u.getCurrentCoins()-coins);
        await MANAGER_USER.getsaverUser().updateUser(u);
    }

    async changeCurrentCoins(u:User, coins:number){
        u.setCurrentCoins(coins);
        await MANAGER_USER.getsaverUser().updateUser(u);
    }
}