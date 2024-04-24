import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import { journalSlice } from "./journal";


export const store = configureStore({
    reducer: {
        auth: authSlice,
        journal: journalSlice.reducer
    },
});