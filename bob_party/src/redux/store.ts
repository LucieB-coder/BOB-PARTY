import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./features/currentUserSlice";
import credentialErrorsSlice from "./features/credentialErrorsSlice";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })

const store = configureStore({
    reducer: {
        currentUserManager: currentUserReducer,
        credentialErrors: credentialErrorsSlice,
    },
    middleware: (getDefaultMiddleware) => customizedMiddleware,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;