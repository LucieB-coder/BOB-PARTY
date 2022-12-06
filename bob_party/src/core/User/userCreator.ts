import { User } from "./user";
import tabSkinApp from "../../constSkin";
import { Conversation } from "../conversation";
import ManagerUser from "../../services/userServices/managerUser";
import { MANAGER_USER } from "../../../App";

export class UserCreator{

    async createUser(username:string, password:string, nationality:string, sexe:string, date:Date){
        //Récup l'ID d'après dans la bdd
        let u:null|User = await MANAGER_USER.getsaverUser().saveUser(username, password, nationality, sexe, date);
        MANAGER_USER.setCurrentUser(u);      
        return u;
    }
}