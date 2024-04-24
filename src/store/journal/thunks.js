import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { firestoreDB } from "../../firebase/config";
import { addNewEmptyNote, clearActiveNote, deleteNoteById, setActiveNote, setImagesToActiveNote, setNotes, setSaving, setUpdating, updateNote } from "./journalSlice";
import { loadNotes } from "../../firebase/providers";
import { uploadFile } from "../../helpers/uploadFile";
//import { deleteDoc } from "firebase/firestore";


export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());
        //uid
        const {uid} = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: [],
        }

        //para mi esto es como cofigurar un puntero
        const newDoc = doc(collection(firestoreDB, `${uid}/journal/notes`));
        //ahora escribimos
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote(newNote) );

        
        dispatch(setActiveNote(newNote))
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        const notes = await loadNotes(uid)
        
        dispatch(setNotes(notes));
    }
}

export const startUpdatingNote = () => {
    return async (dispatch, getState) => {
        dispatch(setUpdating());
        const {uid} = getState().auth;

        const {active: note} = getState().journal;
        const noteToFireStore = { ...note }
        delete noteToFireStore.id       

        const docRef = doc(firestoreDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, {merge: true});        
        dispatch(updateNote(note));
    }
}

export const startUploadingFiles = (files=[]) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());
        if (files.length == 0) return;

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(uploadFile(file));
        }
        
        const fileUrls = await Promise.all(fileUploadPromises);
        dispatch(setImagesToActiveNote(fileUrls));


        // dispatch(setActiveNote({
        //     ...getState().journal.activeNote,
        //     imageUrls: [...getState().journal.activeNote.imageUrls, data.secure_url]
        // }));
    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        const {active: note} = getState().journal;
        
        const docRef = doc(firestoreDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);
        dispatch(deleteNoteById(note.id));
        dispatch(clearActiveNote());
    }
}