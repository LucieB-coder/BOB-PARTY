import MatchSolo from '../Match/matchSolo';
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
let tabU2:User[] = [];
let game=new GameSolo(1, "bo jeu", img, "super jeu", 1, 1, myMap);
let game2 = new GameSolo(2, "jeu magnifique", img, "wow jeu", 1, 1, myMap)
let match = new MatchSolo(1, false, tabU, game);
let match2 = new MatchSolo(1, false, tabU2, game2);
let match3 = new MatchSolo(1, false, tabU, game);


// Get tests
describe('Match get tests', () => {
    it('should return 1', () => {
        expect(match.getCode()).toBe(1);
    })
    it('should return false', () => {
        expect(match.getInGame()).toBe(false);
    })
    it('should return tabU [usr] (users)', () => {
        expect(match.getTabUsers()).toEqual(match3.getTabUsers());
    })
    it('should return game', () => {
        expect(match.getGame()).toEqual(match3.getGame());
    })
})


// Set tests
describe('Match set tests', () => {
    it('should return tabU2 [] (users)', () => {
        match.setTabUser(tabU2);
        expect(match.getTabUsers()).toEqual(match2.getTabUsers());
    })
    it('should return true', () => {
        match.setInGame(true);
        expect(match.getInGame()).toBe(true);
    })
    it('should return game2', () => {
        match.setGame(game2);
        expect(match.getGame()).toEqual(match2.getGame());
    })
})


// Update Post-Match tests
describe('Update post-match tests', () => {
    it('should return 50', () => {
        match.updatePostMatch(tabU[0],3);
        expect(tabU[0].getCurrentCoins()).toBe(50);
    })
    it('should return 75', () => {
        match.updatePostMatch(usr2,4);
        expect(usr2.getCurrentCoins()).toBe(75);
    })
    it('should return 150', () => {
        match.updatePostMatch(tabU[0],5);
        expect(tabU[0].getCurrentCoins()).toBe(150);
    })
    it('should return 225', () => {
        match.updatePostMatch(usr2,6);
        expect(usr2.getCurrentCoins()).toBe(225);
    })
})