import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'not-authenticated', // 'authenticated', checking'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.status = 'authenticated'
            state.displayName = action.payload.name
        },
        logout(state) {
            state.status = 'not-authenticated'
            state.displayName = null
        },
        checkingCredentials(state) {
            state.status = 'checking'
        }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer







