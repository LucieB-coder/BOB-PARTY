import { Skin } from './Skin'
import { Conversation } from './conversation';
import { sign } from 'crypto';

export class User{
    readonly Id: string;
    private Username: string;
    private Password: string;
    private Nationality: string;
    private Sexe: string;
    private DateOfBirth: Date;
    private CurrentCoins: number;
    private TotalCoins: number;
    private NbGamePlayed: number;
    private CurrentSkin: Skin;
    private TabSkin: Skin[];
    private TabConv?: Conversation[];

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
        return this.Username;
    }

    /* Brief : Function setting the name of an user */
    setUsername(username: string){
        this.Username=username;
    }

    /* Brief : Function getting the id of an user */
    getId(){
        return this.Id;
    }

    getPassword(){
        return this.Password;
    }

    setPassword(password:string){
        this.Password=password;
    }

    /* Brief : Function getting the current number of coins of an user */
    getCurrentCoins(){
        return this.CurrentCoins;
    }
    
    /* Brief : Function setting the current number of coins of an user */
    setCurrentCoins(currentCoins: number){
        this.CurrentCoins=currentCoins;
    }
    
    /* Brief : Function getting the sex of an user */
    getSexe(){
        return this.Sexe;
    }
    
    /* Brief : Function getting the sex of an user */
    setSexe(sexe: string){
        this.Sexe=sexe;
    }

    /* Brief : Function getting the date of birth of an user */
    getDateOfBirth(){
        return this.DateOfBirth;
    }
    
    /* Brief : Function setting the date of birth of an user */
    setDateOfBirth(dateOfBirth: Date){
        this.DateOfBirth=dateOfBirth;
    }

    /* Brief : Function getting the nationality of an user */
    getNationality(){
        return this.Nationality;
    }
    
    /* Brief : Function setting the nationality of an user */
    setNationality(nationality: string){
        this.Nationality=nationality;
    }
    
    /* Brief : Function getting the total number of coins of an user */
    getTotalCoins(){
        return this.TotalCoins;
    }
    
    /* Brief : Function setting the total number of coins of an user */
    setTotalCoins(totalCoins: number){
        this.TotalCoins=totalCoins;
    }

    /* Brief : Function getting the current number of game played by an user */

    getGamePlayed(){
        return this.NbGamePlayed;
    }
    
    /* Brief : Function setting the current number of game played by an user */

    setGamePlayed(nb: number){
        this.NbGamePlayed=nb;
    }

     /* Brief : Function getting the current skin of an user */

    getCurrentSkin(){
        return this.CurrentSkin;
    }
    
    /* Brief : Function setting the current skin of an user */
    setCurrentSkin(newSkin: Skin){
        this.CurrentSkin=newSkin;
    }
    
    /* Brief : Function getting the skins of an user */
    getTabSkin(){
        return this.TabSkin;
    }
    
    /* Brief : Function setting the skins of an user */
    setTabSkin(tabSkin: Skin[]){
        this.TabSkin=[...tabSkin];
    }

    /* Brief : Function getting the conversations of an user */
    getTabConv(){
        return this.TabConv;
    }
    
    /* Brief : Function setting the conversations of an user */
    setTabConv(tabConv?: Conversation[]){
        tabConv?.forEach(conv => {
            this.TabConv?.push(conv);
        });
    }


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
}