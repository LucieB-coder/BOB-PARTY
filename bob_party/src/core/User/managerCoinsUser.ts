import { User } from "./user";

export class ManagerCoinsUser{
    addCoins(u:User, coins:number){
        u.setCurrentCoins(u.getCurrentCoins()+coins);
        u.setTotalCoins(u.getTotalCoins()+coins);
        //modif dans la bdd
    }

    removeCoins(u:User, coins:number){
        u.setCurrentCoins(u.getCurrentCoins()-coins);
        //modif dans la bdd
    }

    changeCurrentCoins(u:User, coins:number){
        u.setCurrentCoins(coins);
        //modif dans la bdd
    }
}