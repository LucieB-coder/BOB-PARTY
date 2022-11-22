import { Skin } from '../Skin'
import { User } from './user'


export default class UserSkinModifier{
    addSkin(user:User, skin:Skin){
        user.addSkin(skin);
    }
    
    changeCurrentSkin(user:User, skin:Skin){
        user.setCurrentSkin(skin);
    }
}