import { Conversation } from '../Conversation';
import { Message } from '../Message';
import { Skin } from '../Skin';
import { User } from '../User/user';


// Instances
let conv:Conversation[] = [];
let tab:Skin[] = [];
let classique = new Skin("S0001", "Bob", require('bob_party/assets/BobsSkins/BobClassic.png'), 0);
let dateBirth = new Date(2010,0o3,0o7);
let usr = new User('00001', 'Killyan', 'password', 'France', 'M', dateBirth, 0, 0, 0, classique, tab, conv);
let usr2 = new User('00002', 'Karina', '1234', 'France', 'F', dateBirth, 5, 6, 8, classique, tab, conv);
let theDate = new Date(2022,10,14);
let theDate2 = new Date(2022,10,13);
let theDate3 = new Date(2022,10,15);
let mess = new Message('Bob Party est le meilleur projet', usr, theDate2);
let tabU:User[] = [usr, usr2];
let mess2 = new Message('Oui tout à fait', usr2, theDate);
let mess3 = new Message('Mais oui trop de ouf', usr, theDate3);
let tabM:Message[] = [mess, mess2];
let convo = new Conversation(tabU, tabM, 'the conv');
let usr3 = new User('00003', 'wow', 'password', 'France', 'M', dateBirth, 0, 0, 0, classique, tab, conv);


// Get tests
describe('Conversation get tests', () => {
    it('should return tabU [usr, usr2] (users)', () => {
        expect(convo.getTabUser()).toBe(tabU);
    })
    it('should return tabM [mess, mess2] (messages)', () => {
        expect(convo.getTabMessage()).toBe(tabM);
    })
    it('should return the conv', () => {
        expect(convo.getName()).toBe('the conv');
    })
    it('should return Oui tout à fait (mess2)', () => {
        expect(convo.getLastMessage()).toBe('Oui tout à fait');
    })
})


// Setting new value
convo.setName('THE conv');


// Set test
describe('Conversation set test', () => {
    it('should return THE conv', () => {
        expect(convo.setName).toBe('THE conv');
    })
})