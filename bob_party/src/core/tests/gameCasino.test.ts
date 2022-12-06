import { GameCasino } from '../GameCasino';



// Instances
const img = "";
let game = new GameCasino(1, "bo jeu", img, "super jeu", 1, 5);


// Get tests
describe('GameMuti get tests', () => {
    it('should return bo jeu', () => {
        expect(game.getName()).toBe('bo jeu');
    })
    it('should return require(blackjack.jpg)', () => {
        expect(game.getImageSource()).toBe(img);
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
})


// Setting new values
game.setGameSource('trop cool le jeu');
game.setImageSource(img);
game.setName('beau jeu');
game.setNbPlayerMin(2);
game.setNbPlayerMax(4);


// Set tests
describe('GameCasino set tests', () => {
    it('should return beau jeu', () => {
        expect(game.getName()).toBe('beau jeu');
    })
    it('should return require(JeuDeDame.jpg)', () => {
        expect(game.getImageSource).toBe(img);
    })
    it('should return trop cool le jeu', () => {
        expect(game.getGameSource()).toBe('trop cool le jeu');
    })
    it('should return trop cool le jeu', () => {
        expect(game.getNbPlayerMin()).toBe(2);
    })
    it('should return 4', () => {
        expect(game.getNbPlayerMin()).toBe(4);
    })
})


// Coins Calculator Tests 
describe('Coins calculator tests', () => {
    it('should return 200', () => {
        expect(game.coinsCalculator(200)).toBe(200);
    })
})