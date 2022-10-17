import { ImageSourcePropType } from 'react-native';
import { Game } from './game';
import { GameCasino } from './gameCasino';
import { GameMulti } from './gameMulti';
import { GameSolo } from './gameSolo';
import { User } from "./user";

let index:number=0;

export class Match{
    readonly Code:string;
    private TabUsers:User[];
    private TheGame:Game;
    private GainingMechanism:number=0;

    constructor(tabUser:User[], game:Game){
        index++;
        this.Code=index.toString();
        this.TabUsers=[...tabUser];
        this.TheGame=game;
    }

    getTabUsers(){
        return this.TabUsers;
    }

    ajouterUser(us:User){
        this.TabUsers.push(us);
    }

    setTabUser(tabUser:User[]){
        this.TabUsers=[...tabUser];
    }

    getCode(){
        return this.Code;
    }

    getGame(){
        return this.TheGame;
    }

    setGame(game:Game){
        this.TheGame=game;
    }

    getGainingMechanism(){
        return this.GainingMechanism;
    }

    setGainingMechanism(gain:number){
        this.GainingMechanism=gain;
    }

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
    }

}