import { Skin } from './Skin'
import { Conversation } from './conversation';

export class User{
    private Id: string;
    private Username: string;
    private Nationality: string;
    private Sexe: string;
    private DateOfBirth: string;
    private CurrentCoins: number;
    private TotalCoins: number;
    private CurrentSkin: Skin;
    private TabSkin: Skin[];
    private TabConv: Conversation[];

    constructor(id: string, username: string, nationality: string, sexe: string, dateOfBirth: string, currentCoins: number, totalCoins: number,
                currentSkin: Skin, tabSkin: Skin[], tabConv: Conversation[] ){
                    this.Id=id;
                    this.Username=username;
                    this.Nationality=nationality;
                    this.Sexe=sexe;
                    this.DateOfBirth=dateOfBirth;
                    this.CurrentCoins=currentCoins;
                    this.TotalCoins=totalCoins;
                    this.CurrentSkin=currentSkin;
                    this.TabSkin=[...tabSkin];
                    this.TabConv=[...tabConv]
                }

    getUsername(){
        return this.Username;
    }

    setUsername(username: string){
        this.Username=username;
    }

    getId(){
        return this.Id;
    }
    
    setId(id: string){
        this.Id=id;
    }

    getCurrentCoins(){
        return this.CurrentCoins;
    }
    
    setCurrentCoins(currentCoins: number){
        this.CurrentCoins=currentCoins;
    }
    
    getSexe(){
        return this.Sexe;
    }
    
    setSexe(sexe: string){
        this.Sexe=sexe;
    }

    getDateOfBirth(){
        return this.DateOfBirth;
    }
    
    setDateOfBirth(dateOfBirth: string){
        this.DateOfBirth=dateOfBirth;
    }

    getNationality(){
        return this.Nationality;
    }
    
    setNationality(nationality: string){
        this.Nationality=nationality;
    }
    
    getTotalCoins(){
        return this.TotalCoins;
    }
    
    setTotalCoins(totalCoins: number){
        this.TotalCoins=totalCoins;
    }

    getCurrentSkin(){
        return this.CurrentSkin;
    }
    
    setCurrentSkin(newSkin: Skin){
        this.CurrentSkin=newSkin;
    }
    
    getTabSkin(){
        return this.TabSkin;
    }
    
    setTabSkin(tabSkin: Skin[]){
        this.TabSkin=[...tabSkin];
    }

    getTabConv(){
        return this.TabConv;
    }
    
    setTabConv(tabConv: Conversation[]){
        this.TabConv=[...tabConv];
    }
}