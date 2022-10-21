import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Skin } from "../../core/Skin";
import { User } from "../../core/user";

interface currentUserState {
    value: User[]
}

const initialState: currentUserState = {
    value: [],
}

export const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<User>) => {
            state.value.push(action.payload);
        },
        updateSkin: (state, action: PayloadAction<Skin>) =>{
            const newUser = state.value[0]
            newUser.setCurrentSkin(action.payload);
            state.value.pop();
            state.value.push(newUser);
        },
        updatePseudo: (state, action: PayloadAction<string>) =>{
            const newUser = state.value[0]
            newUser.setUsername(action.payload);
            state.value.pop();
            state.value.push(newUser);
        },
        updatePassword: (state, action: PayloadAction<string>) =>{
            const newUser = state.value[0]
            newUser.setPassword(action.payload);
            state.value.pop();
            state.value.push(newUser);
        },
        updateNationality: (state, action: PayloadAction<string>) =>{
            const newUser = state.value[0]
            newUser.setNationality(action.payload);
            state.value.pop();
            state.value.push(newUser);
        },
        updateSex: (state, action: PayloadAction<string>) =>{
            const newUser = state.value[0]
            newUser.setSexe(action.payload);
            state.value.pop();
            state.value.push(newUser);
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