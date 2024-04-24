import { loginWithEmailPassword, logoutFirebase, signInWithGoogle, signInwithEmailPassword } from "../../firebase/providers";
import { clearNotesOnLogout } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice";



export const checkingAuthentication = (email, password ) => {      
    return async (dispatch, getState) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch, getState) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle()

        if (!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
}

export const startSignInWithEmail = ({email, password, displayName}) => {
    return async (dispatch, getState) => {
        dispatch(checkingCredentials());
        const {ok, errorMessage, uid, photoURL} = await signInwithEmailPassword({email, password, displayName})

        if (!ok) return dispatch(logout({errorMessage}))

        dispatch(login({uid, photoURL, email, displayName}))
        
    }
}

export const startLoginWithEmailPassword = (email, password) => {
    
    return async (dispatch, getState) => {
        dispatch(checkingCredentials());
        const res = await loginWithEmailPassword({email, password})
        if(!res.ok) return dispatch(logout({errorMessage: res.errorMessage}))

        dispatch(login(res))
    }
}

export const startLogout = () => {
    return async (dispatch, getState) => {
        const res = await logoutFirebase()
        if(res.ok){
            dispatch(logout())
            dispatch(clearNotesOnLogout())
        } else {
            dispatch(logout({errorMessage: res.errorMessage}))
        }
    }
}

