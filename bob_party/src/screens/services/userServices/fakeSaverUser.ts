import { User } from "../../../core/User/user";
import ISaverUser from "./ISaverUser";


export default class FakeSaverUser implements ISaverUser{
    
    async saveUser(u: User): Promise<void> {
        return;
    }
    async deleteUser(u: User): Promise<void> {
        return;
    }
    async updateUser(u: User): Promise<void> {
        return;
    }
}