import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth, firestoreDB } from "./config";
import { collection, getDocs } from "firebase/firestore/lite";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);        
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName, email, photoURL, uid} = result.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }
        
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
            errorCode: error.code
        }
    }
}

export const signInwithEmailPassword = async({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
       // await resp.user.updateProfile({displayName});
       await updateProfile(firebaseAuth.currentUser, {displayName});

        const {uid, photoURL} = resp.user;
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
        
    } catch (error) {        
        return {ok: false, errorMessage: error.message}
        
    }
}

export const loginWithEmailPassword = async({email, password}) => {
    try {
        const res = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const {uid, photoURL, displayName} = res.user;
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        return {ok: false, errorMessage: error.message}
    }



}

export const logoutFirebase = async() => {
    try {
        await firebaseAuth.signOut();
        return {ok: true}
    } catch (error) {
        return {ok: false, errorMessage: error.message}
    }
}

export const loadNotes = async(uid) => {
    if(!uid) throw new Error('El UID del usuario no existe');

    const collectionRef = collection(firestoreDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);    
    const notes = [];
    docs.forEach(doc => {
        //observar que data es un metodo del prototype
        notes.push({id: doc.id, ...doc.data()})
    });    
    return notes;
}