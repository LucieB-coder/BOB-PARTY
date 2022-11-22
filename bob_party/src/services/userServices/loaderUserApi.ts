import tabSkinApp from "../../constSkin";
import { Conversation } from "../../core/conversation";
import { Match } from "../../core/match";
import { Skin } from "../../core/skin";
import { User } from "../../core/User/user";
import ILoaderUser from "./ILoaderUser";

class Test{
    public completed:boolean;
    public id: number;
    public title: String;
    public userId: number;

    constructor(completed: boolean, id:number, title:String, userId: number){
        this.completed=completed;
        this.id=id;
        this.title=title;
        this.userId=userId;
    }
}

export default class LoaderUserApi implements ILoaderUser{

    private axios = require('axios').default;

    async loadAllUser() : Promise<User[]> {
        let us:User[]=[];
        let test=new Test(false, 1, "a", 1);
        await this.axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos',
            params: {
                name: "getAllUser",
                //Les params genre nom de la fonction en php
              }
         })
         .then(function (response: any) {
            if (response.data != null && response.data != undefined){
                Object.assign(test, response.data);
                us.push(new User("17", "Fefe63", "jesuishm", "ouioui", "homme", new Date(2022,12,12), 12222, 123324, 12, tabSkinApp[6], tabSkinApp));
            }
        });
    return us;
    }

    
    async loadByID(id: string): Promise<User | null> {
        let test = new Test(true, 0, "wesh", 0);
        try{
            await this.axios({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/todos/1',
                params: {
                    name: "getUserById",
                    id: id,
                    //Les params genre nom de la fonction en php
                }
            })
                .then(function (response: any) {
                    console.log(response.data);
                    Object.assign(test, response.data);
                    console.log(test.id);
                });
        }catch (error) {
            console.error(error);
        }
        return new User("17", "Bite", "jesuishm", "ouioui", "homme", new Date(2022,12,12), 123, 123324, 12, tabSkinApp[6], tabSkinApp);
    }


    async loadByUsername(username: string): Promise<User | null> {
        let test = new Test(true, 0, "wesh", 0);
        try{
            await this.axios({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/todos/1',
                params: {
                    name: "getUserByUsername",
                    username: username,
                    //Les params genre nom de la fonction en php
                }
            })
                .then(function (response: any) {
                    console.log(response.data);
                    Object.assign(test, response.data);
                    console.log(test.id);
                });
        }catch (error) {
            console.error(error);
        }
        return null;
    }

    async loadByUsernamePassword(username: string, password: string): Promise<User | null>{
        let user:User | null=null;
        await this.axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            params: {
                name: "getAllUser",
                //Les params genre nom de la fonction en php
              }
         })
         .then(function (response: any) {
            user=new User("U0001", username, password, "ouioui", "homme", new Date(2022,12,12), 12222, 123324, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)]);
        });
        return user;
    }

    async loadUserByMatch(m: Match): Promise<User[]> {
        throw new Error("Method not implemented.");
    }


    async loadUserByConversation(c: Conversation): Promise<User[]> {
        throw new Error("Method not implemented.");
    }


    async loadLastId(): Promise<string> {
        let test = new Test(true, 0, "wesh", 0);
        try {
            const response = await this.axios.get('https://jsonplaceholder.typicode.com/todos/1');
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
          return "U0001";
    }


    
    
}