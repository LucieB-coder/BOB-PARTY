import StubUser from '../userServices/stub';
import { User } from '../../core/User/user';
import { Skin } from '../../core/skin';

// Instances
let stub:StubUser = new StubUser();
let tabUS:User[] = [
    new User("14", "leBg", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)]),
    new User("48", "WeshWesh", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)]),
    new User("17", "Alban", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)],),
    new User("17", "Fefe63", "jesuishm", "ouioui", "homme", new Date(2022,12,12), 12222, 123324, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)]),
];


// Tests
describe('StubUser tests', () => {
    describe('loadAllUser tests', () => {
        it('should return tabUS', () => {
            expect(stub.loadAllUser()).toEqual(tabUS);
        })
    })
})