import { GameMulti } from '../GameMulti';


// Instances
const img = "";
let myMap = new Map<number, number>([
    [4, 1],
    [3, 3],
    [2, 5],
    [1, 10]
]);
let game = new GameMulti(1, "bo jeu", img, 1, 5, myMap);


// Get tests
describe('GameMulti get tests', () => {
    it('should return 1', () => {
        expect(game.getId()).toBe(1);
    })
    it('should return bo jeu', () => {
        expect(game.getName()).toBe('bo jeu');
    })
    it('should return require(blackjack.jpg)', () => {
        expect(game.getImageSource()).toEqual(img);
    })
    it('should return super jeu', () => {
        expect(game.getGameSource()).toBe('super jeu');
    })
    it('should return 1', () => {
        expect(game.getNbPlayerMin()).toBe(1);
    })
    it('should return 5', () => {
        expect(game.getNbPlayerMax()).toBe(5);
    })
    it('should return myMap', () => {
        expect(game.getMultiMap()).toEqual(myMap);
    })
})


// Set tests
describe('GameMulti set tests', () => {
    it('should return beau jeu', () => {
        game.setName('beau jeu');
        expect(game.getName()).toBe('beau jeu');
    })
    it('should return img ("")', () => {
        game.setImageSource(img);
        expect(game.getImageSource()).toEqual(img);
    })
    it('should return trop cool le jeu', () => {
        game.setGameSource('trop cool le jeu');
        expect(game.getGameSource()).toBe('trop cool le jeu');
    })
    it('should return trop cool le jeu', () => {
        game.setNbPlayerMin(2);
        expect(game.getNbPlayerMin()).toBe(2);
    })
    it('should return 4', () => {
        game.setNbPlayerMax(4);
        expect(game.getNbPlayerMax()).toBe(4);
    })
})


// Coins Calculator tests
describe('GameMulti coins calculator tests', () => {
    it('should return 1', () => {
        expect(game.coinsCalculator(4)).toBe(1);
    })
    it('should return 3', () => {
        expect(game.coinsCalculator(3)).toBe(3);
    })
    it('should return 5', () => {
        expect(game.coinsCalculator(2)).toBe(5);
    })
    it('should return 10', () => {
        expect(game.coinsCalculator(1)).toBe(10);
    })
})