import { User } from "../core/User/user";

export default interface IDataManagerUser{

    createUser(u:User): void;

    getUserById(id:string): User | null;

    getUserByUsernamePassword(username:string, password:string): User | null;

    getUserByUsername(username:string): User | null;

    updateUser(u:User):void;

    deleteUser(u:User): void;

}