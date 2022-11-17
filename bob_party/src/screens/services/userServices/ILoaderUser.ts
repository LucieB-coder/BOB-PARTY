import { User } from "../../../core/User/user";

export default interface ILoaderUser{

    loadByID(id:string): User | null;
    loadByUsername(username:string): User | null;
    loadByUsernamePassword(username:string, password:string): User | null;
}