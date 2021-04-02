import { loginTypes } from './types';
import { app, googleAuthProvider } from '../../firebase';

const setLoading = () => {
    return { type: loginTypes.LOADING };
}

export const isLogged = () => async dispatch => {
    console.log('isLogged action');
    setLoading();
    app.auth().onAuthStateChanged(user => {
        dispatch({
            type: loginTypes.SIGN_IN_USER,
            payload: user
        });
    });

}

export const signinWithGoogle = () => async dispatch => {
    await app.auth().signInWithPopup(googleAuthProvider);
    isLogged();
}

export const signinUser = (email, password) => async dispatch => {
    const res = await app.auth().signInWithEmailAndPassword(email, password);
    dispatch({
        type: loginTypes.SIGN_IN_USER,
        payload: res.user
    });
}

export const signout = () => async dispatch => {
    await app.auth().signOut();
    dispatch({
        type: loginTypes.SIGN_IN_USER,
        payload: null
    })
}