import { Game } from "../../core/game";
import { GameSolo } from "../../core/gameSolo";
import ILoaderGame from "./ILoaderGame";

export default class LoaderGameApi implements ILoaderGame{

    private axios = require('axios').default;

    
    async loadAllGame(): Promise<Game[]> {
        let tab: Game[]=[];
        await this.axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            params: {
                name: "getAllUser",
                //Les params genre nom de la fonction en php
              }
         })
         .then(function (response: any) {
            const map = new Map();
            map.set(0,0);
            map.set(100,50);
            map.set(300,150);
            map.set(450,1000);
            const cookieClicker= new GameSolo(1, "Cookie Clicker", "https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/ImagesJeux/Pong.png", "/Games/CookieClicker/cookieClicker.tsx", 1, 1, map);
            const ticTacToe= new GameSolo(2,"TicTacToe", "https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/f2/06/ef/f206ef53-7206-ffae-af6b-52460ba5636f/source/256x256bb.jpg", "/Games/Tic-Tac-Toe/tic-tac-toe.tsx", 1, 1, map);
            tab=[cookieClicker,ticTacToe];

        });
        return tab;
        
    }
    async loadByID(id: string): Promise<Game | null> {
        throw new Error("Method not implemented.");
    }

}