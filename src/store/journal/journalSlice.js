import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null    
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload)
            state.isSaving = false
        },
        setActiveNote: (state, action) => {
            state.active = action.payload
            //state.messageSaved = ''
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state) => {
            state.isSaving = true
            state.messageSaved = ''
        },
        setUpdating: (state) => {
            state.isSaving = true
            state.messageSaved = ''
        },
        updateNote: (state, action) => {            
            state.notes = state.notes.map( note => {    
                if (note.id === action.payload.id) {
                    return action.payload
                }
                return note;
            })
            state.messageSaved = `${action.payload.title}, actualizado correctamente`
            state.isSaving = false
        },
        setImagesToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSaving = false
        },
        clearNotesOnLogout: (state) => {
            state.isSaving = false
            state.messageSaved = ''
            state.notes = []
            state.active = null
        },
        deleteNoteById: (state, action) => {
            state.isSaving = false
            state.notes = state.notes.filter( note => note.id !== action.payload )
        },
        clearActiveNote: (state) => {
            state.active = null
            state.isSaving = false
            state.messageSaved = ''
        }
    }
});

export const { addEntry, setActiveNote, setNotes, setSaving, setUpdating, updateNote, deleteNoteById, addNewEmptyNote, setImagesToActiveNote, clearNotesOnLogout, clearActiveNote } = journalSlice.actions;



