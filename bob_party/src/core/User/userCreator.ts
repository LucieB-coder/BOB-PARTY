import { User } from "./user";
import tabSkinApp from "../../constSkin";
import { Conversation } from "../conversation";
import ManagerUser from "../../services/userServices/ManagerUser";
import { MANAGER_USER } from "../../../App";

export class UserCreator{

    async createUser(username:string, password:string, nationality:string, sexe:string, date:Date){
        //Récup l'ID d'après dans la bdd
        let u:User;
        let newId:string="";

        let oldId = await MANAGER_USER.getLoaderUser().loadLastId();
        oldId=oldId.slice(1);
        let leInt=parseInt(oldId);
        newId+="U";
        for (let i = 0; i < 4-leInt.toString().length; i++) {
            newId = newId + "0";
        }
        leInt+=1;
        newId=newId+leInt;
        console.log(newId);
        u = new User(newId, username, password, nationality, sexe, date, 0, 0, 0, tabSkinApp[0], [tabSkinApp[0]]); 
        await MANAGER_USER.getsaverUser().saveUser(u);
        MANAGER_USER.setCurrentUser(u);      
        return u;
    }
}