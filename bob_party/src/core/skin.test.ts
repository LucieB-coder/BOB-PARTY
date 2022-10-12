import { Skin } from './Skin';

let classique = new Skin('Classique', 'wouhou');

test('skin Name : Classique', () => {
    expect(classique.getSkinName).toBe('Classique');
});

describe('Get tests', () => {
    it('should return Classique', () => {
        expect(classique.getSkinName).toBe('Classique');
    })
    it('should return wouhou', () => {
        expect(classique.getSkinSource).toBe('wouhou');
    })
})

describe('Set tests', () => {
    it('should return The Classique', () => {
        expect(classique.setSkinName('The Classique')).toBe('The Classique');
    })
    it('should return The wouhou', () => {
        expect(classique.setSkinSource('The wouhou')).toBe('The wouhou');
    })
})