import { User } from "../../core/User/user";
import ISaverUser from "./ISaverUser";


export default class FakeSaverUser implements ISaverUser{
    
    saveUser(u: User): void {
        return;
    }
    deleteUser(u: User): void {
        return;
    }
    updateUser(u: User): void {
        return;
    }
}