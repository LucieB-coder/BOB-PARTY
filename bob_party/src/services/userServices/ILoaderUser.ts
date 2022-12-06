import { Conversation } from "../../core/conversation";
import { Match } from "../../core/Match/match";
import { User } from "../../core/User/user";

export default interface ILoaderUser{

    /**
     * loadAllUser methode that load every user from the data management system
     * return an array of User
     */
    loadAllUser(): Promise<User[]>;

    /**
     * loadByID methode that load a user from the data management system by his id
     * id the id we want to search
     * return a User if found, if not null
     */
    loadByID(id:number): Promise<User | null>;

    /**
     * loadByUsername methode that load a user from the data management system by his username
     * username the username we want to search
     * return a User if found, if not null
     */
    loadByUsername(username:string): Promise<User | null>;

    /**
     * loadByUsernamePassword methode that load a user from the data management system by his username and his password
     * username the username we want to search
     * password the password we want to search
     * return a User if found, if not null
     */
    loadByUsernamePassword(username:string, password:string): Promise<User | null>;

    /**
     * loadUserByMatch methode that load every user in a game
     * return an array of User
     */
    loadUserByMatch(m:Match): Promise<User[]>;

    /**
     * laodUserByConversation methode that load every user in a Conversation
     * return an array of User
     */
    loadUserByConversation(c:Conversation): Promise<User[]>;

    /**
     * loadLastId methode that load the last id used to create a user
     * return a String
     */
    loadLastId(): Promise<number>;
}