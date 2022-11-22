
import { loginUser } from '../../redux/features/currentUserSlice';
import tabUS from "../../constUser";
import { User } from '../User/user';
import { updateAlreadyUsedPseudo,updateImpossibleBirthDate,updateUndefinedBirthDate,updateUndefinedNationality,updateTooLongPseudo,updateUndefinedPseudo,updateUndefinedSex, updateTooShortPassword, updateInvalidPassword, updateInvalidPseudo, updateUndefinedPassword } from '../../redux/features/credentialErrorsSlice';

function max(array: User[]){
    let max: string = "";
    for (let index = 0; index < array.length; index++) {
        const element = array[index].getId();
        if (element > max) max = element;
    }
    return max;
}

    
export const checkNewUserValidity = (login: string, password: string, dateOfBirth: Date, nationality: string, sexe: string, dispatch: any, nav: any) => {
    let actualDate : number  = Date.now();
    let givenDate : number = dateOfBirth.getTime();
    let passwordRegex : RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.*?[.\n\\{}[\],]).{8,}$/;
    let loginRegex : RegExp = /^[A-Za-z0-9_-]{1,22}$/;

    switch(true){
        case (login === ''):
            dispatch(updateUndefinedPseudo(true));
            break;
        
        case (password === ''):
            dispatch(updateUndefinedPassword(true));
            break;

        case (givenDate == null):
            dispatch(updateUndefinedBirthDate(true));
            break;

        case (nationality == ''):
            dispatch(updateUndefinedNationality(true))
            break;

        case (sexe == ''):
            dispatch(updateUndefinedSex(true));
            break;

        case (login.length > 22):
            dispatch(updateTooLongPseudo(true));
            break;

        case (! loginRegex.test(login)):
            dispatch(updateInvalidPseudo(true));
            break;

        //ALREADY USED PSEUDO

        case (password.length < 8):
            dispatch(updateTooShortPassword(true));
            break;
        
        case (! passwordRegex.test(password)):
            dispatch(updateInvalidPassword(true));
            break;

        case ((actualDate-givenDate) < 409968000000):
            dispatch(updateImpossibleBirthDate(true));
            break;

        default:
            const newUser : User = new User("0",login,password,nationality,sexe,dateOfBirth);
            dispatch(loginUser(newUser));
            nav.navigate('HomeTab');
    }
};