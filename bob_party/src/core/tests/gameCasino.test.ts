import { GameCasino } from '../GameCasino';



// Instances
const img = "";
let game = new GameCasino(1, "bo jeu", img, 1, 5);


// Get tests
describe('GameMuti get tests', () => {
    it('should return bo jeu', () => {
        expect(game.getName()).toBe('bo jeu');
    })
    it('should return img ("")', () => {
        expect(game.getImageSource()).toBe(img);
    })
    it('should return 1', () => {
        expect(game.getNbPlayerMin()).toBe(1);
    })
    it('should return 5', () => {
        expect(game.getNbPlayerMax()).toBe(5);
    })
})


// Set tests
describe('GameCasino set tests', () => {
    it('should return beau jeu', () => {
        game.setName('beau jeu');
        expect(game.getName()).toBe('beau jeu');
    })
    it('should return require(JeuDeDame.jpg)', () => {
        game.setImageSource(img);
        expect(game.getImageSource()).toBe(img);
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


// Coins Calculator Tests 
describe('GameCasino coins calculator tests', () => {
    it('should return 200', () => {
        expect(game.coinsCalculator(200)).toBe(200);
    })
})