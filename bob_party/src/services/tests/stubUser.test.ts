import StubUser from '../userServices/stub';
import { User } from '../../core/User/user';
import { Skin } from '../../core/skin';
import { GameSolo } from '../../core/gameSolo';
import MatchSolo from '../../core/Match/matchSolo';
import { Match } from '../../core/Match/match';
import { Conversation } from '../../core/conversation';

// Instances
const img = "";
let stub:StubUser = new StubUser();
let map = new Map<number, number>([
    [50, 3],
    [75, 4],
    [100, 5],
    [150, 6]
]);
let tabUS:User[] = [
    new User(1, "WeshWesh", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, new Skin(1, "Bob", img, 0), [new Skin(1, "Bob", img, 0)]),
    new User(2, "leBg", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, new Skin(1, "Bob", img, 0), [new Skin(1, "Bob", img, 0)]),
    new User(3, "Alban", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, new Skin(1, "Bob", img, 0), [new Skin(1, "Bob", img, 0)],),
    new User(4, "Fefe63", "jesuishm", "ouioui", "homme", new Date(2022,12,12), 12222, 123324, 12, new Skin(1, "Bob", img, 0), [new Skin(1, "Bob", img, 0)]),
];
let game:GameSolo = new GameSolo(1, 'SuperJeu', img, 'source', 1, 1, map);
let match:Match = new MatchSolo(1, false, tabUS, game);
let convo:Conversation = new Conversation(1, tabUS, [], 'superConvo');


// Tests
describe('StubUser tests', () => {
    describe('loadAllUser tests', () => {
        it('should return tabUS', () => {
            expect(stub.loadAllUser()).toEqual(tabUS);
        })
    })
    describe('loadById tests', () => {
        it('should return UserTest (id: 48)', () => {
            expect(stub.loadByID(48)).toEqual(tabUS[0]);
        })
        it('should return null', () => {
            expect(stub.loadByID(999999999999)).toBe(null);
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