import { GameSolo } from '../GameSolo';

// Instances
const img = "";
let myMap = new Map<number, number>([
    [50, 3],
    [75, 4],
    [100, 5],
    [150, 6]
]);
let game=new GameSolo(1, "bo jeu", img, "super jeu", 1, 1, myMap);


// Get tests
describe('GameSolo get tests', () => {
    it('should return 1', () => {
        expect(game.getId()).toBe(1);
    })
    it('should return bo jeu', () => {
        expect(game.getName()).toBe('bo jeu');
    })
    it('should return blackjack.jpg', () => {
        expect(game.getImageSource()).toEqual(img);
    })
    it('should return super jeu', () => {
        expect(game.getGameSource()).toBe('super jeu');
    })
    it('should return 1', () => {
        expect(game.getNbPlayerMin()).toBe(1);
    })
    it('should return 1', () => {
        expect(game.getNbPlayerMax()).toBe(1);
    })
    it('should return myMap', () => {
        expect(game.getSoloMap()).toEqual(myMap);
    })
})


// Set tests
describe('GameSolo set tests', () => {
    it('should return beau jeu', () => {
        game.setName('beau jeu');
        expect(game.getName()).toBe('beau jeu');
    })
    it('should return JeuDeDame.jpg', () => {
        game.setImageSource(img);
        expect(game.getImageSource()).toEqual(img);
    })
    it('should return trop cool le jeu', () => {
        game.setGameSource('trop cool le jeu');
        expect(game.getGameSource()).toBe('trop cool le jeu');
    })
    it('should return 2', () => {
        game.setNbPlayerMin(2);
        expect(game.getNbPlayerMin()).toBe(2);
    })
    it('should return 3', () => {
        game.setNbPlayerMax(3);
        expect(game.getNbPlayerMax()).toBe(3);
    })
})


// Coins Calculator tests
describe('GameSolo coins calculator tests', () => {
    it('should return 50', () => {
        expect(game.coinsCalculator(3)).toBe(50);
    })
    it('should return 75', () => {
        expect(game.coinsCalculator(4)).toBe(75);
    })
    it('should return 100', () => {
        expect(game.coinsCalculator(5)).toBe(100);
    })
    it('should return 150', () => {
        expect(game.coinsCalculator(6)).toBe(150);
    })
})