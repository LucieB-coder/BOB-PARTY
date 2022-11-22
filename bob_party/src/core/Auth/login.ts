import { loginUser } from '../../redux/features/currentUserSlice';
import { updateIncorrectCredentials } from '../../redux/features/credentialErrorsSlice';
import tabUS from "../../constUser";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';




    
export const checkCredentials = (login: string, password: string, dispatch: any, nav: any) => {
    if((tabUS.map((User) => User.getUsername()).indexOf(login)) !== -1){
        let id = (tabUS.map((User) => User.getUsername()).indexOf(login))
        if ((tabUS.map((User) => User.getUsername()).indexOf(login) === id) && ( tabUS[id].getPassword() === password) ){
            dispatch(loginUser(tabUS[id])); 
            nav.navigate('HomeTab')
        }
        else{
        dispatch(updateIncorrectCredentials(true))
        }
    }
    else{
    dispatch(updateIncorrectCredentials(true));
    }
};

