import { MANAGER_USER } from "../../../appManagers";
import { User } from "./user";


export default class UserModificationManager{
    async changePassword(user:User, password:string){
        user.setPassword(password);
        await MANAGER_USER.getsaverUser().updateUser(user);
    }

    async changeUsername(user:User, username:string){
        user.setUsername(username);
        await MANAGER_USER.getsaverUser().updateUser(user);
    }

    async changeNationality(user:User, nationality:string){
        user.setNationality(nationality);
        await MANAGER_USER.getsaverUser().updateUser(user);
    }

    async changeSexe(user:User, sexe:string){
        user.setSexe(sexe);
        await MANAGER_USER.getsaverUser().updateUser(user);
    }
}