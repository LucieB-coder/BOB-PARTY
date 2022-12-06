import { Conversation } from '../Conversation';
import { Message } from '../Message';
import { Skin } from '../Skin';
import { User } from '../User/user';


// Instances
let tab:Skin[] = [];
let classique = new Skin(1, "Bob","https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/BobsSkins/BobClassic.png", 0);
let dateBirth = new Date(2010,0o3,0o7);
let usr = new User(1, 'Killyan', 'password', 'France', 'M', dateBirth, 0, 0, 0, classique, tab);
let usr2 = new User(2, 'Karina', '1234', 'France', 'F', dateBirth, 5, 6, 8, classique, tab);
let theDate = new Date(2022,10,14);
let theDate2 = new Date(2022,10,13);
let theDate3 = new Date(2022,10,15);
let mess = new Message(1, 'Bob Party est le meilleur projet', usr, theDate2);
let tabU:User[] = [usr, usr2];
let mess2 = new Message(2, 'Oui tout à fait', usr2, theDate);
let mess3 = new Message(3, 'Mais oui trop de ouf', usr, theDate3);
let tabM:Message[] = [mess, mess2];
let tabM2:Message[] = [mess, mess2, mess3];
let convo = new Conversation(1, tabU, tabM, 'the conv');
let usr3 = new User(4, 'wow', 'password', 'France', 'M', dateBirth, 0, 0, 0, classique, tab);


// Get tests
describe('Conversation get tests', () => {
    it('should return 1', () => {
        expect(convo.getId()).toBe(1);
    })
    it('should return the conv', () => {
        expect(convo.getName()).toBe('the conv');
    })
    it('should return tabU [usr, usr2] (users)', () => {
        expect(convo.getTabUser()).toEqual(tabU);
    })
    it('should return tabM [mess, mess2] (messages)', () => {
        expect(convo.getTabMessage()).toEqual(tabM);
    })
    it('should return Oui tout à fait (mess2)', () => {
        expect(convo.getLastMessage()).toEqual(mess2);
    })
})


// Set test
describe('Conversation set test', () => {
    it('should return THE conv', () => {
        convo.setName('THE conv');
        expect(convo.getName()).toBe('THE conv');
    })
    it('should return tabU [usr, usr2, usr3] (users)', () => {
        convo.ajouterUser(usr3);
        expect(convo.getTabUser()).toEqual(tabU);
    })
    it('should return tabM [mess, mess2, mess3] (messages)', () => {
        convo.ajouterMessage(mess3);
        expect(convo.getTabMessage()).toEqual(tabM2);
    })
    it('should return Mais oui trop de ouf (mess3)', () => {
        expect(convo.getLastMessage()).toEqual(mess3);
    })
})