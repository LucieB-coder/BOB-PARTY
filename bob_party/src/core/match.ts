import { ImageSourcePropType } from 'react-native';
import { Game } from './game';
import { GameCasino } from './gameCasino';
import { GameMulti } from './gameMulti';
import { GameSolo } from './gameSolo';
import { User } from "./User/user";


export abstract class Match{
    readonly code:string;
    private inGame:Boolean;
    private tabUsers:User[];
    private theGame:Game;

    constructor(code:string, tabUser:User[], game:Game){
        this.code=code;
        this.inGame=false;
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


    /*
    convertMechanismToCoins(){
        if (this.TheGame instanceof GameSolo){
            return this.TheGame.CoinsWithPoints(this.GainingMechanism);
        }
        else if (this.TheGame instanceof GameMulti){
            return this.TheGame.CoinsWithRank(this.GainingMechanism);
        }
        else if (this.TheGame instanceof GameCasino){
            return this.TheGame.betToCoins(this.GainingMechanism);
        }
        return -1;
    }
    */

}