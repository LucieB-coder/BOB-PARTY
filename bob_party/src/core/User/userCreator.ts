import { User } from "./user";
import tabSkinApp from "../../constSkin";
import { Conversation } from "../conversation";

export class UserCreator{
    createUser(username:string, password:string, nationality:string, sexe:string, date:Date){
        let tabConv:Conversation[]=[];
        //Récup l'ID d'après dans la bdd
        const u = new User('0000', username, password, nationality, sexe, date, 0, 0, 0, tabSkinApp[0], [tabSkinApp[0]], tabConv);
        //Ajout du joueur dans la bdd
        return u;
    }
}