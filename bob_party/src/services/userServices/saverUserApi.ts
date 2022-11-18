import { User } from "../../core/User/user";
import ISaverUser from "./ISaverUser";


export default class SaverUserApi implements ISaverUser{

    saveUser(u: User): void {
        throw new Error("Method not implemented.");
    }
    deleteUser(u: User): void {
        throw new Error("Method not implemented.");
    }
    updateUser(u: User): void {
        throw new Error("Method not implemented.");
    }

}