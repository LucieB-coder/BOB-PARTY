import { User } from "../../../core/User/user";
import ISaverUser from "./ISaverUser";


export default class SaverUserApi implements ISaverUser{

    async saveUser(u: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deleteUser(u: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async updateUser(u: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

}