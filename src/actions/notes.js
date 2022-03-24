import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import Swal from 'sweetalert2';
import { fileUpload } from "../helpers/fileUpload";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime()
        };

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        console.log(doc);
        dispatch(activeNote(doc.id, newNote));
    }
};

export const activeNote = (id, note) => {
    return {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    }
};

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
};


export const setNotes = (notes) => {
    return {
        type: types.notesLoad,
        payload: notes
    }
};

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const noteToFirestore = { ...note }
        delete noteToFirestore.id;

        if (!note.url) delete noteToFirestore.url;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch(refreshNote(note.id, note));
        Swal.fire("Saved", note.title, "success");
    }
};

export const refreshNote = (id, note) => {
    return {
        type: types.notesUpdated,
        payload: {
            id,
            note
        }
    }
};

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const { activeNote } = getState().notesInfo;

        console.log(file);
        console.log(activeNote);

        const fileUrl = await fileUpload(file);
        console.log(fileUrl);
    }
}