import LoaderUserApi from '../userServices/loaderUserApi';
import ILoaderUser from '../userServices/ILoaderUser';
import { Match } from '../../core/match';
import { MatchSolo } from '../../core/matchSolo';
import { GameSolo } from '../../core/gameSolo';
import tabUS from '../../constUser';

// Instances
let loader:ILoaderUser = new LoaderUserApi();
let map = new Map<number, number>([
    [50, 3],
    [75, 4],
    [100, 5],
    [150, 6]
]);
let game:GameSolo = new GameSolo('G0001', 'SuperJeu', require('id'), 'source', 1, 1, map);
let match:Match = new MatchSolo('M0001', tabUS, game);

// Tests
describe('LoaderUserApi tests', () => {
    describe('loadById Tests', () => {
        it('should return UserTest (id: 48)', () => {
            expect(loader.loadByID('48')).toEqual(tabUS[0]);
        })
        it('should return null', () => {
            expect(loader.loadByID('jExistePas')).toBe(null);
        })
    })
    describe('loadByUserName tests', () => {
        it('should return USerTest (name: WeshWesh)', () => {
            expect(loader.loadByUsername('WeshWesh')).toEqual(tabUS[0]);
        })
        it('should return null', () => {
            expect(loader.loadByUsername('jExistePas')).toBe(null);
        })
    })
    describe('loadByUserNamePassword tests', () => {
        it('should return UserTest (name: WeshWesh, password: MdpDeOuf)', () => {
            expect(loader.loadByUsernamePassword('WeshWesh', 'MdpDeOuf')).toEqual(tabUS[0]);
        })
        it('should return null', () => {
            expect(loader.loadByUsernamePassword('jExistePas', 'jExistePas')).toBe(null);
        })
    })
    describe('loadUserByMatch tests', () => {
        it('should return UserTest', () => {
            expect(loader.loadUserByMatch(match)).toEqual(tabUS[0]);
        })
    })
})