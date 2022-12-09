import { createSlice, PayloadAction } from "@reduxjs/toolkit"

var incorrectCredentialsBool : boolean = false;
var tooLongPseudodBool : boolean = false;
var tooShortPasswordBool : boolean = false;
var invalidPseudoBool : boolean = false;
var invalidPasswordBool : boolean = false;
var impossibleBirthDateBool : boolean = false;
var undefinedPseudoBool : boolean = false;
var undefinedPasswordBool : boolean = false;
var undefinedBirthDateBool : boolean = false;
var undefinedNationalityBool : boolean = false;
var undefinedSexBool : boolean = false;
var alreadyUsedPseudoBool : boolean = false;


export const credentialErrorsSlice = createSlice({
    name: "credentialErrors",
    initialState:{
        newUserErrorList : {
            tooLongPseudo: tooLongPseudodBool,
            tooShortPassword : tooShortPasswordBool,
            invalidPseudo: invalidPseudoBool,
            invalidPassword: invalidPasswordBool,
            impossibleBirthDate: impossibleBirthDateBool,
            undefinedPseudo: undefinedPseudoBool,
            undefinedPassword: undefinedPasswordBool,
            undefinedBirthDate: undefinedBirthDateBool,
            undefinedNationality: undefinedNationalityBool,
            undefinedSex: undefinedSexBool,
            alreadyUsedPseudo: alreadyUsedPseudoBool,
        },
        loginErrorList : {
            incorrectCredentials: incorrectCredentialsBool,
        }
    },
    reducers: {
        updateIncorrectCredentials: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                newUserErrorList:{
                    ...state.newUserErrorList,
                    incorrectCredentials: action.payload
                }
            }
        },
        updateTooLongPseudo: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                newUserErrorList:{
                    ...state.newUserErrorList,
                    tooShortPseudo: action.payload
                }
            }
        },
        updateTooLongPassword: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                newUserErrorList:{
                    ...state.newUserErrorList,
                    tooLongPassword: action.payload
                }
            }
        },
        updateTooShortPassword: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                newUserErrorList:{
                    ...state.newUserErrorList,
                    tooShortPassword: action.payload
                }
            }
        },
        updateInvalidPseudo: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                newUserErrorList:{
                    ...state.newUserErrorList,
                    invalidPseudo: action.payload
                }
            }
        },
        updateInvalidPassword: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                newUserErrorList:{
                    ...state.newUserErrorList,
                    invalidPassword: action.payload
                }
            }
        },
        updateImpossibleBirthDate: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                newUserErrorList:{
                    ...state.newUserErrorList,
                    impossibleBirthDate: action.payload
                }
            }
        },
        updateUndefinedPseudo: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                newUserErrorList:{
                    ...state.newUserErrorList,
                    undefinedPseudo: action.payload
                }
            }
        },
        updateUndefinedPassword: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                newUserErrorList:{
                    ...state.newUserErrorList,
                    undefinedPassword: action.payload
                }
            }
        },
        updateUndefinedBirthDate: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                newUserErrorList:{
                    ...state.newUserErrorList,
                    undefinedBirthDate: action.payload
                }
            }
        },
        updateUndefinedNationality: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                newUserErrorList:{
                    ...state.newUserErrorList,
                    undefinedNationality: action.payload
                }
            }
        },
        updateUndefinedSex: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                newUserErrorList:{
                    ...state.newUserErrorList,
                    undefinedSex: action.payload
                }
            }
        },
        updateAlreadyUsedPseudo: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                newUserErrorList:{
                    ...state.newUserErrorList,
                    alreadyUsedPseudo: action.payload
                }
            }
        },
    },
});

export const { updateIncorrectCredentials } =  credentialErrorsSlice.actions
export const { updateTooShortPassword } =  credentialErrorsSlice.actions
export const { updateTooLongPseudo } =  credentialErrorsSlice.actions
export const { updateTooLongPassword } =  credentialErrorsSlice.actions
export const { updateInvalidPseudo } =  credentialErrorsSlice.actions
export const { updateInvalidPassword } =  credentialErrorsSlice.actions
export const { updateImpossibleBirthDate } =  credentialErrorsSlice.actions
export const { updateUndefinedPseudo } =  credentialErrorsSlice.actions
export const { updateUndefinedPassword } =  credentialErrorsSlice.actions
export const { updateUndefinedBirthDate } =  credentialErrorsSlice.actions
export const { updateUndefinedNationality } =  credentialErrorsSlice.actions
export const { updateUndefinedSex } =  credentialErrorsSlice.actions
export const { updateAlreadyUsedPseudo } = credentialErrorsSlice.actions



export default credentialErrorsSlice.reducer;