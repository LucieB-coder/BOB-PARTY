import { User } from '../User/user';
import { Skin } from '../Skin';


// Instances
const img = "";
let classique = new Skin(1, "Bob", img, 0);
let blue = new Skin(2, "Bob Blue", img, 100);
let tab:Skin[] = [];
let tab2:Skin[] = [classique, blue];
let dateBirth = new Date(2010,0o3,0o7);
let dateBirth2 = new Date(2009,0o3,0o7);
let usr = new User(1, 'Killyan', 'password', 'France', 'M', dateBirth, 0, 0, 0, classique, tab);


// Tests des get
describe('User get tests', () => {
    it('should return 1', () => {
        expect(usr.getId()).toBe(1);
    })
    it('should return Killyan', () => {
        expect(usr.getUsername()).toBe('Killyan');
    })
    it('should return password', () => {
        expect(usr.getPassword()).toBe('password');
    })
    it('should return France', () => {
        expect(usr.getNationality()).toBe('France');
    })
    it('should return M', () => {
        expect(usr.getSexe()).toBe('M');
    })
    it('should return 2010-03-07 (dateBirth)', () => {
        expect(usr.getDateOfBirth()).toEqual(dateBirth);
    })
    it('should return 0', () => {
        expect(usr.getCurrentCoins()).toBe(0);
    })
    it('should return 0', () => {
        expect(usr.getTotalCoins()).toBe(0);
    })
    it('should return 0', () => {
        expect(usr.getGamesPlayed()).toBe(0);
    })
    it('should return classique', () => {
        expect(usr.getCurrentSkin()).toEqual(classique);
    })
    it('should return tab', () => {
        expect(usr.getTabSkin()).toEqual(tab);
    })
})


// Tests des set
describe('User get tests', () => {
    it('should return BgKillyan', () => {
        usr.setUsername('BgKillyan');
        expect(usr.getUsername()).toBe('BgKillyan');
    })
    it('should return 1234', () => {
        usr.setPassword('1234');
        expect(usr.getPassword()).toBe('1234');
    })
    it('should return Marseille', () => {
        usr.setNationality('Marseille');
        expect(usr.getNationality()).toBe('Marseille');
    })
    it('should return F', () => {
        usr.setSexe('F');
        expect(usr.getSexe()).toBe('F');
    })
    it('should return 07/03/2009 (dateBirth2)', () => {
        usr.setDateOfBirth(dateBirth2);
        expect(usr.getDateOfBirth()).toEqual(dateBirth2);
    })
    it('should return 2', () => {
        usr.setCurrentCoins(2);
        expect(usr.getCurrentCoins()).toBe(2);
    })
    it('should return 2', () => {
        usr.setTotalCoins(2);
        expect(usr.getTotalCoins()).toBe(2);
    })
    it('should return 4', () => {
        usr.setGamesPlayed(4);
        expect(usr.getGamesPlayed()).toBe(4);
    })
    it('should return kikou', () => {
        usr.setCurrentSkin(blue);
        expect(usr.getCurrentSkin()).toEqual(blue);
    })
    it('should return tab2', () => {
        usr.setTabSkin(tab2);
        expect(usr.getTabSkin()).toEqual(tab2);
    })
})