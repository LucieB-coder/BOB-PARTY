import { Skin } from './Skin'
import { Conversation } from './conversation';

export class User{
    private Id: string;
    private Username: string;
    private Nationality: string;
    private Sexe: string;
    private DateOfBirth: Date;
    private CurrentCoins: number;
    private TotalCoins: number;
    private CurrentSkin: Skin;
    private TabSkin: Skin[];
    private TabConv?: Conversation[];

    /* Consturctor of the class */
    constructor(id: string, username: string, nationality: string, sexe: string, dateOfBirth: Date, currentCoins: number, totalCoins: number,
    currentSkin: Skin, tabSkin: Skin[], tabConv?: Conversation[] ){
        this.Id=id;
        this.Username=username;
        this.Nationality=nationality;
        this.Sexe=sexe;
        this.DateOfBirth=dateOfBirth;
        this.CurrentCoins=currentCoins;
        this.TotalCoins=totalCoins;
        this.CurrentSkin=currentSkin;
        this.TabSkin=[...tabSkin];
        tabConv?.forEach(conv => {
            this.TabConv?.push(conv);
        });
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
    
    /* Brief : Function setting the id of an user */
    setId(id: string){
        this.Id=id;
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
}