import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { uiFinishLoading, uiStartLoading } from "./ui";

import Swal from 'sweetalert2'

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
};

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(uiStartLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(uiFinishLoading());
            })
            .catch(e => {
                console.log(e);
                dispatch(uiFinishLoading());
                Swal.fire("Error", e.message, "error");
            })
    };
};

export const startRegisterWithEmailPassword = (name, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({
                    displayName: name
                });

                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                console.log(e);
                Swal.fire("Error", e.message, "error");
            })
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            });
    }
};

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(logOut());
    }
};

export const logOut = () => {
    return {
        type: types.logout
    }
};