import { ImageSourcePropType } from 'react-native';
import { Game } from './game';
import { GameCasino } from './gameCasino';
import { GameMulti } from './gameMulti';
import { GameSolo } from './gameSolo';
import { User } from "./User/user";


export abstract class Match{
    readonly code:string;
    private tabUsers:User[];
    private theGame:Game;

    constructor(code:string, tabUser:User[], game:Game){
        this.code=code;
        this.tabUsers=[...tabUser];
        this.theGame=game;
    }

    getTabUsers(){
        return this.tabUsers;
    }

    setTabUser(tabUser:User[]){
        this.tabUsers=[...tabUser];
    }

    getCode(){
        return this.code;
    }

    getGame(){
        return this.theGame;
    }

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