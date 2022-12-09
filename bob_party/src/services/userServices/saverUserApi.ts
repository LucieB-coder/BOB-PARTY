import { User } from "../../core/User/user";
import ISaverUser from "./ISaverUser";


export default class SaverUserApi implements ISaverUser{

    private axios = require('axios').default;

    async saveUser(username:string, password:string, nationality:string, sexe:string, date:Date): Promise<User | null> {
        let us:User|null=null;
        this.axios({
            method: 'post',
            url: '/user/12345',
            data: {
              firstName: 'Fred',
              lastName: 'Flintstone'
            }
          }).then(function (response: any) {
            if (response.data != null && response.data != undefined){
                let test:any;
                Object.assign(test, response.data);
                us=test;
            }
        });
        return us;
    }
    async deleteUser(u: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async updateUser(u: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

}