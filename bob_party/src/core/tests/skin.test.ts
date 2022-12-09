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
        expect(classique.getSkinName()).toBe('Bob');
    })
    it('should return img ("")', () => {
        expect(classique.getSkinSource()).toEqual(img);
    })
    it('should return 0', () => {
        expect(classique.getSkinCost()).toBe(0);
    })
})



// Set tests

describe('Skin set tests', () => {
    it('should return The Classique', () => {
        classique.setSkinName('Bob Blue');
        expect(classique.getSkinName()).toBe('Bob Blue');
    })
    it('should return yo', () => {
        classique.setSkinSource("yo");
        expect(classique.getSkinSource()).toBe('yo');
    })
    it('should return 100', () => {
        classique.setSkinCost(100);
        expect(classique.getSkinCost()).toBe(100);
    })
})