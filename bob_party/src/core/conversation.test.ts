import { Conversation } from './Conversation';
import { Message } from './Message';
import { User } from './User';


// Instance



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