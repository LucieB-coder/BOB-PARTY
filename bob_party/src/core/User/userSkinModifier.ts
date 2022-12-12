import { MANAGER_USER } from '../../../appManagers';
import { Skin } from '../Skin'
import { User } from './user'


export default class UserSkinModifier{
    async addSkin(user:User, skin:Skin){
        user.addSkin(skin);
        await MANAGER_USER.getsaverUser().updateUser(user);
    }
    
    async changeCurrentSkin(user:User, skin:Skin){
        user.setCurrentSkin(skin);
        await MANAGER_USER.getsaverUser().updateUser(user);
    }
}