import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'checking', // 'not-authenticated',  'authenticated', 
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
            state.status = 'authenticated';
            state.displayName = action.payload.displayName;
            state.uid=  action.payload.uid;
            state.email=  action.payload.email;            
            state.photoURL=  action.payload.photoURL; 
            state.errorMessage=  null;           
        },
        logout(state, action) {
            state.status = 'not-authenticated'
            state.displayName = null;
            state.uid=  null;
            state.email=  null;            
            state.photoURL=  null;
            state.errorMessage=  action.payload?.errorMessage;
        },
        checkingCredentials(state) {
            state.status = 'checking'
        }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer







