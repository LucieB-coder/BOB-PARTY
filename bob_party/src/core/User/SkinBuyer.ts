import { User } from "./user";
import { Skin } from "../Skin";
import { ManagerCoinsUser } from "./managerCoinsUser";
//import ManagerCoinsUser 


export class SkinBuyer{
    buy(u:User, s:Skin){
        const manage=new ManagerCoinsUser();
        u.getTabSkin().push(s);
        manage.removeCoins(u, s.getSkinCost());
        
    }
}