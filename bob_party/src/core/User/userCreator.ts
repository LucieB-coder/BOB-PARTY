import { User } from "./user";
import tabSkinApp from "../../constSkin";

export class UserCreator{
    createUser(username:string, password:string, passConf:string, nationality:string, sexe:string, date:Date){
        //Récup l'ID d'après dans la bdd
        const u = new User('0000', username, password, nationality, sexe, date, 0, 0, 0, tabSkinApp[0], [tabSkinApp[0]], undefined);
        //Ajout du joueur dans la bdd
        return u;
    }
}