import { loginTypes } from '../actions/types';

const INITITIAL_STATE = {
    user: null,
    loading: false,
}

const loginReducer = (state = INITITIAL_STATE, { type, payload }) => {
    switch (type) {
        case loginTypes.LOADING:
            return { ...state, loading: true }
        case loginTypes.SIGN_IN_USER:
            console.log('sign in user case');
            return { user: payload, loading: false }
        default:
            return state;
    }
}

export default loginReducer;