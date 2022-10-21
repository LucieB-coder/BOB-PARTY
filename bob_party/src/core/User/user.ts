import { Skin } from '../Skin'
import { Conversation } from '../conversation';
import { sign } from 'crypto';

export class User{
    readonly id: string;
    private username: string;
    private password: string;
    private nationality: string;
    private sexe: string;
    private dateOfBirth: Date;
    private currentCoins: number;
    private totalCoins: number;
    private nbGamePlayed: number;
    private currentSkin: Skin;
    private tabSkin: Skin[];
    private tabConv?: Conversation[];

    /* Consturctor of the class */
    constructor(id: string, username: string, password:string, nationality: string, sexe: string, dateOfBirth: Date, currentCoins: number, totalCoins: number,
                nbGamePlayed:number, currentSkin: Skin, tabSkin: Skin[], tabConv?: Conversation[] ){
                    this.Id=id;
                    this.Username=username;
                    this.Password=password;
                    this.Nationality=nationality;
                    this.Sexe=sexe;
                    this.DateOfBirth=dateOfBirth;
                    this.NbGamePlayed=nbGamePlayed;
                    this.CurrentCoins=currentCoins;
                    this.TotalCoins=totalCoins;
                    this.CurrentSkin=currentSkin;
                    this.TabSkin=[...tabSkin];
                    if(tabConv!==undefined){
                        this.TabConv=[...tabConv];
                    }
                    else{
                        this.TabConv=tabConv;
                    }
                }

    /* Brief : Function getting the name of an user */
    getUsername(){
        return this.username;
    }

    /* Brief : Function setting the name of an user */
    setUsername(username: string){
        this.username=username;
    }

    /* Brief : Function getting the id of an user */
    getId(){
        return this.id;
    }

    getPassword(){
        return this.password;
    }

    setPassword(password:string){
        this.password=password;
    }

    /* Brief : Function getting the current number of coins of an user */
    getCurrentCoins(){
        return this.currentCoins;
    }
    
    /* Brief : Function setting the current number of coins of an user */
    setCurrentCoins(currentCoins: number){
        this.currentCoins=currentCoins;
    }
    
    /* Brief : Function getting the sex of an user */
    getSexe(){
        return this.sexe;
    }
    
    /* Brief : Function getting the sex of an user */
    setSexe(sexe: string){
        this.sexe=sexe;
    }

    /* Brief : Function getting the date of birth of an user */
    getDateOfBirth(){
        return this.dateOfBirth;
    }
    
    /* Brief : Function setting the date of birth of an user */
    setDateOfBirth(dateOfBirth: Date){
        this.dateOfBirth=dateOfBirth;
    }

    /* Brief : Function getting the nationality of an user */
    getNationality(){
        return this.nationality;
    }
    
    /* Brief : Function setting the nationality of an user */
    setNationality(nationality: string){
        this.nationality=nationality;
    }
    
    /* Brief : Function getting the total number of coins of an user */
    getTotalCoins(){
        return this.totalCoins;
    }
    
    /* Brief : Function setting the total number of coins of an user */
    setTotalCoins(totalCoins: number){
        this.totalCoins=totalCoins;
    }

    /* Brief : Function getting the current number of game played by an user */

    getGamePlayed(){
        return this.nbGamePlayed;
    }
    
    /* Brief : Function setting the current number of game played by an user */

    setGamePlayed(nb: number){
        this.nbGamePlayed=nb;
    }

     /* Brief : Function getting the current skin of an user */

    getCurrentSkin(){
        return this.currentSkin;
    }
    
    /* Brief : Function setting the current skin of an user */
    setCurrentSkin(newSkin: Skin){
        this.currentSkin=newSkin;
    }
    
    /* Brief : Function getting the skins of an user */
    getTabSkin(){
        return this.tabSkin;
    }
    
    /* Brief : Function setting the skins of an user */
    setTabSkin(tabSkin: Skin[]){
        this.tabSkin=[...tabSkin];
    }

    /* Brief : Function getting the conversations of an user */
    getTabConv(){
        return this.tabConv;
    }
    
    /* Brief : Function setting the conversations of an user */
    setTabConv(tabConv?: Conversation[]){
        tabConv?.forEach(conv => {
            this.tabConv?.push(conv);
        });
    }

    /*
    changeUserCoins(coin:number){
        this.CurrentCoins+=coin;
        if (coin>0){
            this.TotalCoins+=coin;
        }
    }

    changerCurrentSkin(skin:Skin){
        this.CurrentSkin=skin;
    }

    ajouterSkin(skin:Skin){
        this.TabSkin.push(skin);
    }

    canConnect(username:string, mdp:string){
        if (this.Username==username){
            return this.Password==mdp;
        }
        return false;
    }

    usrPasswordEquals(username:string, password:string){
        return this.Password==password && this.Username==username;
    }
    */
}