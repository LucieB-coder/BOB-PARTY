import { User } from "../../core/User/user";
import IDataManagerUser from "../IDataManagerUser";

export default class DataManagerUserDatabase implements IDataManagerUser{
    
    createUser(u: User): void {
        throw new Error("Method not implemented.");
    }
    getUserById(id: string): User | null {
        throw new Error("Method not implemented.");
    }
    getUserByUsernamePassword(username: string, password: string): User | null {
        throw new Error("Method not implemented.");
    }
    getUserByUsername(username: string): User | null {
        throw new Error("Method not implemented.");
    }
    updateUser(u: User): void {
        throw new Error("Method not implemented.");
    }
    deleteUser(u: User): void {
        throw new Error("Method not implemented.");
    }

}