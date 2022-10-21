import { MatchSolo } from '../MatchSolo';
import { Conversation } from '../Conversation';
import { Skin } from '../Skin';
import { User } from '../User/user';
import { GameSolo } from '../GameSolo';



// Instances
let classique = new Skin("S0001", "Bob", require('bob_party/assets/BobsSkins/BobClassic.png'), 0);
let blue = new Skin("S0002", "Bob Blue", require('bob_party/assets/BobsSkins/BobBlue.png'), 100);
let tab:Skin[] = [classique, blue];
let dateBirth = new Date(2010,0o3,0o7);
let conv:Conversation[] = [];
let usr = new User('00001', 'Killyan', 'password', 'France', 'M', dateBirth, 0, 0, 0, classique, tab, conv);
let tabU:User[] = [usr];
let myMap = new Map<number, number>([
    [50, 3],
    [75, 4],
    [100, 5],
    [150, 6]
]);
let game=new GameSolo("bo jeu", require('bob_party/assets/ImagesJeux/blackjack.jpg'), "super jeu", 1, 1, myMap);
let match = new MatchSolo("machin", tabU, game);
let tabU2:User[] = [];
let game2 = new GameSolo("jeu magnifique", require('bob_party/assets/ImagesJeux/blackjack.jpg'), "wow jeu", 1, 1, myMap)


// Get tests
describe('Match get tests', () => {
    it('should return machin', () => {
        expect(match.getCode()).toBe('machin');
    })
    it('should return tabU [usr] (users)', () => {
        expect(match.getTabUsers()).toBe(tabU);
    })
    it('should return game', () => {
        expect(match.getGame).toBe(game);
    })
})


// Setting new values
match.setGame(game2);
match.setTabUser(tabU2);


// Set tests
describe('Match set tests', () => {
    it('should return tabU2 [] (users)', () => {
        expect(match.getTabUsers()).toBe(tabU2);
    })
    it('should return game2', () => {
        expect(match.getGame).toBe(game2);
    })
})