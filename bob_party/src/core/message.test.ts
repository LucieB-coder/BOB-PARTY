import { Message } from './Message';
import { User } from './User';
import { Conversation } from './Conversation';
import { Skin } from './Skin';

// Instance
let conv:Conversation[] = [];
let tab:Skin[] = [];
let classique = new Skin('Classique', 'wouhou');
let dateBirth = new Date(2010,0o3,0o7);
let usr = new User('00001', 'Killyan', 'France', 'M', dateBirth, 0, 0, classique, tab, conv);
let usr2 = new User('00002', 'Karina', 'France', 'F', dateBirth, 5, 6, classique, tab, conv);
let theDate = new Date(2022,10,14);
let theDate2 = new Date(2022,10,13);
let mess = new Message('Bob Party est le meilleur projet', usr, theDate);


// Tests des get
describe('Message get tests', () => {
    it('should return Bob Party est le meilleur projet', () => {
        expect(mess.getMessageContent()).toBe('Bob Party est le meilleur projet');
    })
    it('should return usr', () => {
        expect(mess.getMessageSender()).toBe(usr);
    })
    it('should return wouhou', () => {
        expect(mess.getMessageDate()).toBe(theDate);
    })
})


// Set de nouvelles valeurs
mess.setMessageContent('Vive Bob Party');
mess.setSMessageSender(usr2);
mess.setSMessageDate(theDate2);


// Tests de set
describe('Message set tests', () => {
    it('should return Vive Bob Party', () => {
        expect(mess.getMessageContent()).toBe('Vive Bob Party');
    })
    it('should return usr2', () => {
        expect(mess.getMessageSender()).toBe(usr2);
    })
    it('should return theDate2', () => {
        expect(mess.getMessageDate()).toBe(theDate2);
    })
})