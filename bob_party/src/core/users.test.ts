import { User } from './User';
import { Skin } from './Skin';
import { Conversation } from './Conversation';


// Instances
let classique = new Skin('Classique', 'wouhou');
let kikou = new Skin('Kikou', 'trop beau');
let tab:Skin[] = [];
let tab2:Skin[] = [classique, kikou];
let dateBirth = new Date(2010,0o3,0o7);
let dateBirth2 = new Date(2009,0o3,0o7);
let conv:Conversation[] = [];
let conv2:Conversation[] = [];
let usr = new User('00001', 'Killyan', 'France', 'M', dateBirth, 0, 0, classique, tab, conv);


// Tests des get
describe('User get tests', () => {
    it('should return 00001', () => {
        expect(usr.getId()).toBe('00001');
    })
    it('should return Killyan', () => {
        expect(usr.getUsername()).toBe('Killyan');
    })
    it('should return France', () => {
        expect(usr.getNationality()).toBe('France');
    })
    it('should return M', () => {
        expect(usr.getSexe()).toBe('M');
    })
    it('should return 2010-03-07 (dateBirth)', () => {
        expect(usr.getDateOfBirth()).toBe(dateBirth);
    })
    it('should return 0', () => {
        expect(usr.getCurrentCoins()).toBe(0);
    })
    it('should return 0', () => {
        expect(usr.getTotalCoins()).toBe(0);
    })
    it('should return classique', () => {
        expect(usr.getCurrentSkin()).toBe(classique);
    })
    it('should return tab', () => {
        expect(usr.getTabSkin()).toBe(tab);
    })
    it('should return conv', () => {
        expect(usr.getTabConv()).toBe(conv);
    })
})


// Set de nouvelles valeurs
usr.setId('00002');
usr.setUsername('BgKillyan');
usr.setNationality('Marseille');
usr.setSexe('F');
usr.setDateOfBirth(dateBirth2);
usr.setCurrentCoins(2);
usr.setTotalCoins(2);
usr.setCurrentSkin(kikou);
usr.setTabSkin(tab2);
usr.setTabConv(conv2);


// Tests des set
describe('User get tests', () => {
    it('should return 00002', () => {
        expect(usr.getId()).toBe('00002');
    })
    it('should return BgKillyan', () => {
        expect(usr.getUsername()).toBe('BgKillyan');
    })
    it('should return Marseille', () => {
        expect(usr.getNationality()).toBe('Marseille');
    })
    it('should return F', () => {
        expect(usr.getSexe()).toBe('F');
    })
    it('should return 07/03/2009 (dateBirth2)', () => {
        expect(usr.getDateOfBirth()).toBe(dateBirth2);
    })
    it('should return 2', () => {
        expect(usr.getCurrentCoins()).toBe(2);
    })
    it('should return 2', () => {
        expect(usr.getTotalCoins()).toBe(2);
    })
    it('should return kikou', () => {
        expect(usr.getCurrentSkin()).toBe(kikou);
    })
    it('should return tab2', () => {
        expect(usr.getTabSkin()).toBe(tab2);
    })
    it('should return conv2', () => {
        expect(usr.getTabConv()).toBe(conv2);
    })
})