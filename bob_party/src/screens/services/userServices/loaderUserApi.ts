import { Conversation } from "../../../core/conversation";
import { Match } from "../../../core/match";
import { User } from "../../../core/User/user";
import ILoaderUser from "./ILoaderUser";

export default class LoaderUserApi implements ILoaderUser{

    async loadAllUser(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async loadByID(id: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    async loadByUsername(username: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    async loadByUsernamePassword(username: string, password: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    async loadUserByMatch(m: Match): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async loadUserByConversation(c: Conversation): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    
    
}