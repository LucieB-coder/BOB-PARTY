import { User } from "../../core/User/user";

export default interface ISaverUser{

    /**
     * saveUser methode that save a User in the data management system
     * u the user we want to save
     */

     saveUser(u:User): void;

     /**
      * deleteUser methode that delete a User in the data management system
      * u the user we want to delete
      */
     deleteUser(u:User):void;
 
     /**
      * updateUser methode that update a User in the data management system
      * u the user we want to update
      */
     updateUser(u:User): void;
}