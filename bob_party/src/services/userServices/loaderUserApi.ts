import { Conversation } from "../../core/conversation";
import { Match } from "../../core/match";
import { User } from "../../core/User/user";
import ILoaderUser from "./ILoaderUser";

export default class LoaderUserApi implements ILoaderUser{

    loadAllUser(): User[] {
        throw new Error("Method not implemented.");
    }
    loadByID(id: string): User | null {
        throw new Error("Method not implemented.");
    }
    loadByUsername(username: string): User | null {
        throw new Error("Method not implemented.");
    }
    loadByUsernamePassword(username: string, password: string): User | null {
        throw new Error("Method not implemented.");
    }
    loadUserByMatch(m: Match): User[] {
        throw new Error("Method not implemented.");
    }
    laodUserByConversation(c: Conversation): User[] {
        throw new Error("Method not implemented.");
    }

    
    
}