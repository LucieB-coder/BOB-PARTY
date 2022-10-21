import { Skin } from './Skin';



// Instance

let classique = new Skin("S0001", "Bob", require('bob_party/assets/BobsSkins/BobClassic.png'), 0);



// Get tests

describe('Skin get tests', () => {
    it('should return S0001', () => {
        expect(classique.getSkinId()).toBe('S0001');
    })
    it('should return Bob', () => {
        expect(classique.getSkinName()).toBe('Bob');
    })
    it('should return require(BobClassic.png)', () => {
        expect(classique.getSkinSource()).toBe(require('bob_party/assets/BobsSkins/BobClassic.png'));
    })
    it('should return 0', () => {
        expect(classique.getSkinCost()).toBe(0);
    })
})



// Setting new values

classique.setSkinName('Bob Blue');
classique.setSkinCost(100);
classique.setSkinSource(require('bob_party/assets/BobsSkins/BobBlue.png'));



// Set tests

describe('Skin set tests', () => {
    it('should return The Classique', () => {
        expect(classique.getSkinName()).toBe('Bob blue');
    })
    it('should return require(BobBlue.png)', () => {
        expect(classique.getSkinSource()).toBe(require('bob_party/assets/BobsSkins/BobBlue.png'));
    })
    it('should return 100', () => {
        expect(classique.getSkinCost()).toBe(0);
    })
})