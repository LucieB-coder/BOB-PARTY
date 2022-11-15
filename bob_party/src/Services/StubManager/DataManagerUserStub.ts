import { Skin } from "../../core/skin"
import { User } from "../../core/User/user"
import IDataManagerUser from "../IDataManagerUser"

export default class DataManagerUserStub implements IDataManagerUser{

    tabAllUser: User[]=[
        new User("14", "leBg", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0) ], []),
        new User("48", "WeshWesh", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)], []),
        new User("17", "Alban", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0), [new Skin("S0001", "Bob",require('bob_party/assets/BobsSkins/BobClassic.png'), 0)], []),
        new User("17", "Fefe63", "jesuishm", "ouioui", "homme", new Date(2022,12,12), 12222, 123324, 12, new Skin("S0006", "Bob Red",require('bob_party/assets/BobsSkins/BobRed.png'), 100), [new Skin("S0006", "Bob Red",require('bob_party/assets/BobsSkins/BobRed.png'), 100),], []),
    ]
    
    /**
     * createUser methode that allow us to create a user in the stub
     * u the user to add
     */
    createUser(u: User): void {
        this.tabAllUser.push(u);
    }

    /**
     * getUserById methode that allow us to find a user with his id in the stub
     * id the id we want to search
     * return User if found, null if not
     */
    getUserById(id: string): User | null {
        this.tabAllUser.forEach(user => {
            if (user.getId()==id) {
                return user;
            }
        });
        return null;
    }

    /**
     * getUserByUsernamePassword methode that allow us to find a user with his username and password in the stub
     * username the username of the presumed user
     * password the password of the presumed user
     * return User if found, null if not
     */
    getUserByUsernamePassword(username: string, password: string): User | null {
       this.tabAllUser.forEach(user => {
            if (user.getId()==username && user.getPassword()==password) {
                return user;
            }
        });
        return null;
    }

    /**
     * getUserByUsername methode that allow us to find a user with his username in the stub
     * username the username of the presumed user
     * return User if found, null if not
     */
    getUserByUsername(username: string): User | null {
        this.tabAllUser.forEach(user => {
            if (user.getId()==username) {
                return user;
            }
        });
        return null;    
    }

    /**
     * updateUser methode that allow us to update a user in the stub
     * u the user we want to update
     */
    updateUser(u: User): void {
        this.tabAllUser.forEach(user => {
            if (user.isEqual(u)) {
                user=u;
            }
        });    
    }

    /**
     * deleteUser methode that allow us to delete a user in the stub
     * u the user we want to delete
     */
    deleteUser(u: User): void {
        this.tabAllUser.forEach(user => {
            if (user.isEqual(u)) {
                this.tabAllUser.splice(this.tabAllUser.indexOf(u), 1);
            }
        }); 
    }

}