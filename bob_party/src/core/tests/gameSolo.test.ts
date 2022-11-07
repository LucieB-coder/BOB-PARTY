import { GameSolo } from '../GameSolo';

// Instances
let myMap = new Map<number, number>([
    [50, 3],
    [75, 4],
    [100, 5],
    [150, 6]
]);
let game=new GameSolo("bo jeu", require('bob_party/assets/ImagesJeux/blackjack.jpg'), "super jeu", 1, 1, myMap);


// Get tests
describe('GameSolo get tests', () => {
    it('should return bo jeu', () => {
        expect(game.getName()).toBe('bo jeu');
    })
    it('should return require(blackjack.jpg)', () => {
        expect(game.getImageSource()).toBe(require('bob_party/assets/ImagesJeux/blackjack.jpg'));
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
        expect(game.getSoloMap()).toBe(myMap);
    })
})


// Setting new values
game.setGameSource('trop cool le jeu');
game.setImageSource(require('bob_party/assets/ImagesJeux/JeuDeDame.jpg'));
game.setName('beau jeu');
game.setNbPlayerMin(2);
game.setNbPlayerMax(3);


// Set tests
describe('GameSolo set tests', () => {
    it('should return beau jeu', () => {
        expect(game.getName()).toBe('beau jeu');
    })
    it('should return require(JeuDeDame.jpg)', () => {
        expect(game.getImageSource).toBe(require('bob_party/assets/ImagesJeux/JeuDeDame.jpg'));
    })
    it('should return trop cool le jeu', () => {
        expect(game.getGameSource()).toBe('trop cool le jeu');
    })
    it('should return 2', () => {
        expect(game.getNbPlayerMin()).toBe(2);
    })
    it('should return 3', () => {
        expect(game.getNbPlayerMax()).toBe(3);
    })
})