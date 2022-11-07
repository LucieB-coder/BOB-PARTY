import { User } from "./user";

export class UserCreater{
    create(username:string, password:string, passConf:string, nationality:string, sexe:string){
        if (username=="" || username.includes(" ") || nationality=="" || password!=passConf || password=="" ||
            sexe==""){
            return null;
        }
    }
}