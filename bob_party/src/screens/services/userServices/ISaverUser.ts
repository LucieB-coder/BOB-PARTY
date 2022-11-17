import { User } from "../../../core/User/user";

export default interface ISaverUser{

    saveUser(u:User): void;
    deleteUser(u:User):void;
}