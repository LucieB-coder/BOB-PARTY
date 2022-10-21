import { User } from "./user";

export class ManagerCoinsUser{
    addCoins(u:User, coins:number){
        u.setCurrentCoins(u.getCurrentCoins()+coins);
        u.setTotalCoins(u.getTotalCoins()+coins);
    }

    removeCoins(u:User, coins:number){
        u.setCurrentCoins(u.getCurrentCoins()-coins);
    }

    changeCurrentCoins(u:User, coins:number){
        u.setCurrentCoins(coins);
    }
}