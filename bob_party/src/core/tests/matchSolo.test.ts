import MatchSolo from '../Match/matchSolo';
import { Conversation } from '../Conversation';
import { Skin } from '../Skin';
import { User } from '../User/user';
import { GameSolo } from '../GameSolo';



// Instances
const img = "";
let classique = new Skin(1, "Bob", img, 0);
let blue = new Skin(2, "Bob Blue", img, 100);
let tab:Skin[] = [classique, blue];
let dateBirth = new Date(2010,0o3,0o7);
let usr = new User(1, 'Killyan', 'password', 'France', 'M', dateBirth, 0, 0, 0, classique, tab);
let usr2 = new User(2, 'Rémi', 'pwd', 'Martinique', 'M', dateBirth, 0, 0, 0, classique, tab);
let tabU:User[] = [usr];
let myMap = new Map<number, number>([
    [50, 3],
    [75, 4],
    [100, 5],
    [150, 6]
]);
let game=new GameSolo(1, "bo jeu", img, "super jeu", 1, 1, myMap);
let match = new MatchSolo(1, false, tabU, game);
let tabU2:User[] = [];
let game2 = new GameSolo(2, "jeu magnifique", img, "wow jeu", 1, 1, myMap)


// Get tests
describe('Match get tests', () => {
    it('should return 1', () => {
        expect(match.getCode()).toBe(1);
    })
    it('should return false', () => {
        expect(match.getInGame()).toBe(false);
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
match.setInGame(true);
match.setTabUser(tabU2);


// Set tests
describe('Match set tests', () => {
    it('should return tabU2 [] (users)', () => {
        expect(match.getTabUsers()).toBe(tabU2);
    })
    it('should return true', () => {
        expect(match.getInGame()).toBe(true);
    })
    it('should return game2', () => {
        expect(match.getGame).toBe(game2);
    })
})


// Update Post-Match tests
describe('Update post-match tests', () => {
    it('should return 3', () => {
        match.updatePostMatch(tabU[0],50);
        expect(tabU[0].getCurrentCoins()).toBe(3);
    })
    it('should return 8', () => {
        match.updatePostMatch(tabU[0],100);
        expect(tabU[0].getCurrentCoins()).toBe(8);
    })
    it('should return 4', () => {
        match.updatePostMatch(usr2,75);
        expect(usr2.getCurrentCoins()).toBe(4);
    })
    it('should return 10', () => {
        match.updatePostMatch(usr2,150);
        expect(usr2.getCurrentCoins()).toBe(10);
    })
})