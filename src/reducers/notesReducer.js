import { types } from "../types/types";

const initialState = {
    notes: [],
    activeNote: null
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                activeNote: action.payload
            }
        case types.notesAddNew:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }

        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }

        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map((note) => {
                    return note.id === action.payload.id ? action.payload.note : note;
                })
            }
        case types.notesDelete:
            return {
                ...state,
                activeNote: null,
                notes: state.notes.filter((note) => { return note.id !== action.payload })
            }
        case types.notesLogoutClean:
            return {
                ...state,
                activeNote: null,
                notes: []
            }

        default:
            return state;
    }
};