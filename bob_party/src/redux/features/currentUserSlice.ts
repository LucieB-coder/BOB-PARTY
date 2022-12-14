import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Skin } from "../../core/Skin";
import { User } from "../../core/User/user";

const dateNull = new Date();

const userNull:User= new User("","","","","",dateNull);

var currentUser:User = userNull;

export const currentUserSlice = createSlice({
    name: "currentUserManager",
    initialState : {
        currentUser
    },
    reducers: {
        loginUser: (state, action: PayloadAction<User>) => {
            const newUser : User = new User(action.payload.getId(), action.payload.getUsername(),action.payload.getPassword(),action.payload.getNationality(),action.payload.getSexe(),action.payload.getDateOfBirth(), action.payload.getCurrentCoins(), action.payload.getTotalCoins(),action.payload.getGamePlayed(),action.payload.getCurrentSkin(),action.payload.getTabSkin(), action.payload.getTabConv())
            
            state.currentUser = newUser;
        },
        updateSkin: (state, action: PayloadAction<Skin>) =>{
            
            
            const newUser : User = new User(currentUser.getId(), currentUser.getUsername(),currentUser.getPassword(),currentUser.getNationality(),currentUser.getSexe(),currentUser.getDateOfBirth(), currentUser.getCurrentCoins(), currentUser.getTotalCoins(),currentUser.getGamePlayed(),currentUser.getCurrentSkin(),currentUser.getTabSkin(), currentUser.getTabConv())

            newUser.setCurrentSkin(action.payload);

            state.currentUser = newUser;
        },
        updatePseudo: (state, action: PayloadAction<string>) =>{
            const newUser: User = new User(currentUser.getId(), currentUser.getUsername(), currentUser.getPassword(), currentUser.getNationality(), currentUser.getSexe(), currentUser.getDateOfBirth());

            console.log(currentUser);
            newUser.setUsername(action.payload);
            return {
                ...state,
                currentUser: newUser,
            }
        },
        updatePassword: (state, action: PayloadAction<string>) =>{
            const newUser = state.currentUser;
            currentUser.setPassword(action.payload)
            return {
                ...state,
                currentUser: newUser,
            }
        },
        updateNationality: (state, action: PayloadAction<string>) =>{
            const newUser = state.currentUser;
            currentUser.setNationality(action.payload)
            return {
                ...state,
                currentUser: newUser,
            }
        },
        updateSex: (state, action: PayloadAction<string>) =>{
            const newUser = state.currentUser;
            currentUser.setSexe(action.payload)
            return {
                ...state,
                currentUser: newUser,
            }
        }
    },
});

export const { loginUser } =  currentUserSlice.actions
export const { updateSkin } = currentUserSlice.actions
export const { updatePseudo } = currentUserSlice.actions
export const { updatePassword } = currentUserSlice.actions
export const { updateNationality } = currentUserSlice.actions
export const { updateSex } = currentUserSlice.actions

export default currentUserSlice.reducer;