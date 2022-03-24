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

        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }

        case types.notesUpdated:
            console.log(action.payload);
            return {
                ...state,
                notes: state.notes.map((note) => {
                    return note.id === action.payload.id ? action.payload.note : note;
                })
            }

        default:
            return state;
    }
};