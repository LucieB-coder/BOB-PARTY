import { Game } from './Game';
import { GameSolo } from './GameSolo';
import { GameMulti } from './GameMulti';
import { GameCasino } from './GameCasino';


// Instances
let myMap = new Map<number, number>([
    [50, 3],
    [75, 4],
    [100, 5],
    [150, 6]
]);
let game=new GameSolo("bo jeu", require('bob_party/assets/ImagesJeux/blackjack.jpg'), "super jeu", 1, myMap);


// Get tests
describe('Game get tests', () => {
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
        expect(game.getNbPlayer()).toBe(1);
    })
    it('should return myMap', () => {
        expect(game.getSoloMap()).toBe(myMap);
    })
})


// Setting new values
game.setGameSource('trop cool le jeu');
game.setImageSource(require('bob_party/assets/ImagesJeux/JeuDeDame.jpg'));
game.setName('beau jeu');
game.setNbPlayer(2);


// Set tests
describe('Game set tests', () => {
    it('should return beau jeu', () => {
        expect(game.getName()).toBe('beau jeu');
    })
    it('should return require(JeuDeDame.jpg)', () => {
        expect(game.getImageSource).toBe(require('bob_party/assets/ImagesJeux/JeuDeDame.jpg'));
    })
    it('should return trop cool le jeu', () => {
        expect(game.getGameSource()).toBe('trop cool le jeu');
    })
    it('should return trop cool le jeu', () => {
        expect(game.getNbPlayer()).toBe(2);
    })
})


// CoinsWithPoints test
describe('CoinWithPoints tests', () => {
    it('should return 3', () => {
        expect(game.CoinsWithPoints(50)).toBe(3);
    })
    it('should return 4', () => {
        expect(game.CoinsWithPoints(75)).toBe(4);
    })
    it('should return 5', () => {
        expect(game.CoinsWithPoints(100)).toBe(5);
    })
    it('should return 6', () => {
        expect(game.CoinsWithPoints(150)).toBe(6);
    })
})