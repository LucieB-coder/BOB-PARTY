import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })

const store = configureStore({
    reducer: {
    },
    middleware: (getDefaultMiddleware) => customizedMiddleware,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;