import { checkingCredentials } from "./authSlice";


export const checkingAuthentication = (email, password ) => {  
    console.log({email, password})
    return async (dispatch, getState) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch, getState) => {
        dispatch(checkingCredentials());
    }
}