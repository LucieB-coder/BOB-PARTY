import { User } from "../../core/User/user";
import ISaverUser from "./ISaverUser";


export default class SaverUserApi implements ISaverUser{

    private axios = require('axios').default;

    async saveUser(u: User): Promise<void> {
        this.axios({
            method: 'post',
            url: '/user/12345',
            data: {
              firstName: 'Fred',
              lastName: 'Flintstone'
            }
          });
        
    }
    async deleteUser(u: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async updateUser(u: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

}