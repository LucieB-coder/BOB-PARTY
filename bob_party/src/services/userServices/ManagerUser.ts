import { User } from "../../core/User/user";
import ILoaderUser from "./ILoaderUser";
import ISaverUser from "./ISaverUser";

export default class ManagerUser{

    private currentUser: User | null=null;

    private loaderUser: ILoaderUser;

    private saverUser: ISaverUser;

    constructor(loader:ILoaderUser, saver:ISaverUser){
        this.loaderUser=loader;
        this.saverUser=saver;
    }

    getCurrentUser(){
        return this.currentUser;
    }

    setCurrentUser(u:User | null){
        this.currentUser=u;
    }

    getLoaderUser(){
        return this.loaderUser;
    }

    setLoaderUser(l:ILoaderUser){
        this.loaderUser=l;
    }

    getsaverUser(){
        return this.saverUser;
    }

    setsaverUser(s:ISaverUser){
        this.saverUser=s;
    }
}