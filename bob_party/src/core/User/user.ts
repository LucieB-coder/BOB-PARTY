import { Skin } from '../Skin'
import { Conversation } from '../conversation';
import { sign } from 'crypto';
import { TextBase } from 'react-native';

export class User{

    readonly id: number;
    private username: string;
    private password: string;
    private nationality: string;
    private sexe: string;
    private dateOfBirth: Date;
    private currentCoins: number;
    private totalCoins: number;
    private nbGamesPlayed: number;
    private currentSkin: Skin;
    private tabSkin: Skin[];

    /* Consturctor of the class */
    constructor(id: number, username: string, password:string, nationality: string, sexe: string, dateOfBirth: Date, currentCoins: number, totalCoins: number,
                nbGamesPlayed:number, currentSkin: Skin, tabSkin: Skin[]){
                    this.id=id;
                    this.username=username;
                    this.password=password;
                    this.nationality=nationality;
                    this.sexe=sexe;
                    this.dateOfBirth=dateOfBirth;
                    this.nbGamesPlayed=nbGamesPlayed;
                    this.currentCoins=currentCoins;
                    this.totalCoins=totalCoins;
                    this.currentSkin=currentSkin;
                    this.tabSkin=tabSkin;
                }


    /* Brief : Function getting the name of a user */
    getUsername(){
        return this.username;
    }

    /* Brief : Function setting the name of a user */
    setUsername(username: string){
        this.username=username;
    }

    /* Brief : Function getting the id of a user */
    getId(){
        return this.id;
    }

    /* Brief : Function getting the password of a user */
    getPassword(){
        return this.password;
    }

    /* Brief : Function setting the password of a user */
    setPassword(password:string){
        this.password=password;
    }

    /* Brief : Function getting the current number of coins of a user */
    getCurrentCoins(){
        return this.currentCoins;
    }
    
    /* Brief : Function setting the current number of coins of a user */
    setCurrentCoins(currentCoins: number){
        this.currentCoins=currentCoins;
    }
    
    /* Brief : Function getting the sex of a user */
    getSexe(){
        return this.sexe;
    }
    
    /* Brief : Function getting the sex of a user */
    setSexe(sexe: string){
        this.sexe=sexe;
    }

    /* Brief : Function getting the date of birth of a user */
    getDateOfBirth(){
        return this.dateOfBirth;
    }
    
    /* Brief : Function setting the date of birth of a user */
    setDateOfBirth(dateOfBirth: Date){
        this.dateOfBirth=dateOfBirth;
    }

    /* Brief : Function getting the nationality of a user */
    getNationality(){
        return this.nationality;
    }
    
    /* Brief : Function setting the nationality of a user */
    setNationality(nationality: string){
        this.nationality=nationality;
    }
    
    /* Brief : Function getting the total number of coins of a user */
    getTotalCoins(){
        return this.totalCoins;
    }
    
    /* Brief : Function setting the total number of coins of a user */
    setTotalCoins(totalCoins: number){
        this.totalCoins=totalCoins;
    }

    /* Brief : Function getting the current number of games played by a user */

    getGamesPlayed(){
        return this.nbGamesPlayed;
    }
    
    /* Brief : Function setting the current number of games played by a user */

    setGamesPlayed(nb: number){
        this.nbGamesPlayed=nb;
    }

     /* Brief : Function getting the current skin of a user */

    getCurrentSkin(){
        return this.currentSkin;
    }
    
    /* Brief : Function setting the current skin of a user */
    setCurrentSkin(newSkin: Skin){
        this.currentSkin=newSkin;
    }
    
    /* Brief : Function getting the skins of a user */
    getTabSkin(){
        return this.tabSkin;
    }
    
    /* Brief : Function setting the skins of a user */
    setTabSkin(tabSkin: Skin[]){
        this.tabSkin=[...tabSkin];
    }
    
    /* Brief : Function adding a skin to a user */
    addSkin(skin:Skin){
        this.tabSkin.push(skin);
    }

    isEqual(u:User | null){
        if (u!= null){
            if (u.getId()==this.id){
                return true;
            }
        }
        return false;
    }

}