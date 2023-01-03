import { MANAGER_USER } from "../../../appManagers";
import { User } from "./user";

export class UserCoinsModifier{


    async addCoins(u:User, coins:number){
        const newCoins: number=coins+u.getCurrentCoins();
        const newTotalCoins: number=coins+u.getTotalCoins();
        u.setCurrentCoins(newCoins);
        u.setTotalCoins(newTotalCoins);
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