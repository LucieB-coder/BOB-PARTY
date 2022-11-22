import StubUser from '../userServices/stub';
import { User } from '../../core/User/user';
import { Skin } from '../../core/skin';
import { GameSolo } from '../../core/gameSolo';
import { MatchSolo } from '../../core/matchSolo';
import { Match } from '../../core/match';
import { Conversation } from '../../core/conversation';

// Instances
let stub:StubUser = new StubUser();
let map = new Map<number, number>([
    [50, 3],
    [75, 4],
    [100, 5],
    [150, 6]
]);
let tabUS:User[] = [
    new User("U0001", "WeshWesh", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)]),
    new User("U0002", "leBg", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)]),
    new User("U0003", "Alban", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)],),
    new User("U0004", "Fefe63", "jesuishm", "ouioui", "homme", new Date(2022,12,12), 12222, 123324, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)]),
];
let game:GameSolo = new GameSolo('G0001', 'SuperJeu', require('id'), 'source', 1, 1, map);
let match:Match = new MatchSolo('M0001', tabUS, game);
let convo:Conversation = new Conversation(tabUS, [], 'superConvo');


// Tests
describe('StubUser tests', () => {
    describe('loadAllUser tests', () => {
        it('should return tabUS', () => {
            expect(stub.loadAllUser()).toEqual(tabUS);
        })
    })
    describe('loadById tests', () => {
        it('should return UserTest (id: 48)', () => {
            expect(stub.loadByID('48')).toEqual(tabUS[0]);
        })
        it('should return null', () => {
            expect(stub.loadByID('jExistePas')).toBe(null);
        })
    })
    describe('loadByUserName tests', () => {
        it('should return USerTest (name: WeshWesh)', () => {
            expect(stub.loadByUsername('WeshWesh')).toEqual(tabUS[0]);
        })
        it('should return null', () => {
            expect(stub.loadByUsername('jExistePas')).toBe(null);
        })
    })
    describe('loadByUserNamePassword tests', () => {
        it('should return UserTest (name: WeshWesh, password: MdpDeOuf)', () => {
            expect(stub.loadByUsernamePassword('WeshWesh', 'MdpDeOuf')).toEqual(tabUS[0]);
        })
        it('should return null', () => {
            expect(stub.loadByUsernamePassword('jExistePas', 'jExistePas')).toBe(null);
        })
    })
    describe('loadUserByMatch tests', () => {
        it('should return tabUS', () => {
            expect(stub.loadUserByMatch(match)).toEqual(tabUS);
        })
        it('should return null', () => {
            expect(stub.loadByUsernamePassword('jExistePas', 'jExistePas')).toEqual(null);
        })
    })
    describe('loadUserByConversation tests', () => {
        it('should return tabUS', () => {
            expect(stub.loadUserByConversation(convo)).toEqual(tabUS);
        })
    })
    describe('loadLastId', () => {
        it('should return U0005', () => {
            expect(stub.loadLastId()).toBe('U0005');
        })
    })
})