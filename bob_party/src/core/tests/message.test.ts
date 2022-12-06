import { Message } from '../Message';
import { User } from '../User/user';
import { Skin } from '../Skin';

// Instances
const img = "";
let classique = new Skin(1, "Bob", img, 0);
let dateBirth = new Date(2010,0o3,0o7);
let usr = new User(1, 'Killyan', 'password', 'France', 'M', dateBirth, 0, 0, 0, classique, []);
let usr2 = new User(2, 'Karina', '1234', 'France', 'F', dateBirth, 5, 6, 8, classique, []);
let theDate = new Date(2022,10,14);
let theDate2 = new Date(2022,10,13);
let mess = new Message(1, 'Bob Party est le meilleur projet', usr, theDate);


// Get tests
describe('Message get tests', () => {
    it('should return 1', () => {
        expect(mess.getMessageId()).toBe(1);
    })
    it('should return Bob Party est le meilleur projet', () => {
        expect(mess.getMessageContent()).toBe('Bob Party est le meilleur projet');
    })
    it('should return usr', () => {
        expect(mess.getMessageSender()).toBe(usr);
    })
    it('should return theDate', () => {
        expect(mess.getMessageDate()).toBe(theDate);
    })
})


// Setting new values
mess.setMessageContent('Vive Bob Party');
mess.setMessageSender(usr2);
mess.setMessageDate(theDate2);


// Set tests
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