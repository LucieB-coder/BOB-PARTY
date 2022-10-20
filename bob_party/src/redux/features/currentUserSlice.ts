import { createSlice, PayloadAction } from "@reduxjs/toolkit"
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
    },
});

export const { loginUser } =  currentUserSlice.actions

export default currentUserSlice.reducer;