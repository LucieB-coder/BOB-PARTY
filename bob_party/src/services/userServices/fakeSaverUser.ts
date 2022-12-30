import { Skin } from "../../core/Skin";
import { User } from "../../core/User/user";
import ISaverUser from "./ISaverUser";


export default class FakeSaverUser implements ISaverUser{
    
    async saveUser(username:string, password:string, nationality:string, sexe:string, date:Date): Promise<User | null> {
        return null;
    }
    async deleteUser(u: User): Promise<void> {
        return;
    }
    async updateUser(u: User): Promise<void> {
        return;
    }

    async addSkinList(u: User, s:Skin): Promise<void> {
        return;
    }
}