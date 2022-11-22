import { Conversation } from "../../core/conversation";
import { Match } from "../../core/match";
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
        let test = new Test(true, 0, "wesh", 0);
        await this.axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            params: {
                name: "getAllUser",
                //Les params genre nom de la fonction en php
              }
         })
         .then(function (response: any) {
            console.log(response.data);
                Object.assign(test, response.data);
                console.log(test.id);
            });
    return [];
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
        return null;
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


    async loadByUsernamePassword(username: string, password: string): Promise<User | null> {
        let test = new Test(true, 0, "wesh", 0);
        try{
            await this.axios({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/todos/1',
                params: {
                    name: "getUserForConnection",
                    username: username,
                    password: password,
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