import { Skin } from '../Skin';



// Instance
const img = "";
let classique = new Skin(1, "Bob", img, 0);



// Get tests

describe('Skin get tests', () => {
    it('should return 1', () => {
        expect(classique.getSkinId()).toBe(1);
    })
    it('should return Bob', () => {
        expect(classique.getSkinName()).toEqual('Bob');
    })
    it('should return img ("")', () => {
        expect(classique.getSkinSource()).toEqual(img);
    })
    it('should return 0', () => {
        expect(classique.getSkinCost()).toBe(0);
    })
})



// Setting new values

classique.setSkinName('Bob Blue');
classique.setSkinCost(100);
classique.setSkinSource(img);



// Set tests

describe('Skin set tests', () => {
    it('should return The Classique', () => {
        expect(classique.getSkinName()).toBe('Bob blue');
    })
    it('should return require(BobBlue.png)', () => {
        expect(classique.getSkinSource()).toBe(img);
    })
    it('should return 100', () => {
        expect(classique.getSkinCost()).toBe(0);
    })
})