import { MANAGER_USER } from "../../../appManagers";
import { User } from "./user";

export class UserCoinsModifier{


    async addCoins(u:User, coins:number){
        u.setCurrentCoins(u.getCurrentCoins()+coins);
        u.setTotalCoins(u.getTotalCoins()+coins);
        await MANAGER_USER.getsaverUser().updateUser(u);
        MANAGER_USER.setCurrentUser(u);
    }

    async removeCoins(u:User, coins:number): Promise<boolean>{
        if (u.getCurrentCoins()>=coins){
            u.setCurrentCoins(u.getCurrentCoins()-coins);
            await MANAGER_USER.getsaverUser().updateUser(u);
            MANAGER_USER.setCurrentUser(u);
            return true;
        }
        return false;
    }

    async changeCurrentCoins(u:User, coins:number){
        u.setCurrentCoins(coins);
        await MANAGER_USER.getsaverUser().updateUser(u);
        MANAGER_USER.setCurrentUser(u);
    }
}