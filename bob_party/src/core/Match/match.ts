import { ImageSourcePropType } from 'react-native';
import { Game } from '../game';
import { User } from "../User/user";


export abstract class Match{
    readonly code:number;
    private inGame:Boolean=false;
    private tabUsers:User[];
    private theGame:Game;

    constructor(code:number, inGame:Boolean, tabUser:User[], game:Game){
        this.code=code;
        this.inGame=inGame;
        this.tabUsers=[...tabUser];
        this.theGame=game;
    }


    /* Brief : Fuction getting if the match is currently in a game */

    getInGame(){
        return this.inGame;
    }


    /* Brief : Fuction setting the boolean inGame */

    setInGame(inGame:Boolean){
        this.inGame=inGame;
    }


    /* Brief : Fuction getting the array of User */

    getTabUsers(){
        return this.tabUsers;
    }



    /* Brief : Fuction setting the array of User */

    setTabUser(tabUser:User[]){
        this.tabUsers=[...tabUser];
    }


    /* Brief : Fuction getting code of a match */

    getCode(){
        return this.code;
    }


    /* Brief : Fuction getting the game of a match */

    getGame(){
        return this.theGame;
    }


    /* Brief : Fuction setting the game of a match */

    setGame(game:Game){
        this.theGame=game;
    }


    abstract updatePostMatch(user:User, points:number):Promise<void>;

}