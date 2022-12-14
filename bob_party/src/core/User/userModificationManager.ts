import { User } from "./user";


export default class UserModificationManager{
    changePassword(user:User, password:string){
        user.setPassword(password);
        //modif dans la bdd
    }

    changeUsername(user:User, username:string){
        user.setPassword(username);
        //modif dans la bdd
    }

    changeNationality(user:User, nationality:string){
        user.setNationality(nationality);
        //modif dans la bdd
    }

    changeSexe(user:User, sexe:string){
        user.setSexe(sexe);
        //modif dans la bdd
    }
}