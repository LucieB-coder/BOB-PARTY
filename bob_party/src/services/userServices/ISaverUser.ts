import { User } from "../../core/User/user";

export default interface ISaverUser{

    /**
     * saveUser methode that save a User in the data management system
     * u the user we want to save
     */

    saveUser(username:string, password:string, nationality:string, sexe:string, date:Date): Promise<User | null>;

     /**
      * deleteUser methode that delete a User in the data management system
      * u the user we want to delete
      */
     deleteUser(u:User | null):Promise<void>;
 
     /**
      * updateUser methode that update a User in the data management system
      * u the user we want to update
      */
     updateUser(u:User | null): Promise<void>;
}