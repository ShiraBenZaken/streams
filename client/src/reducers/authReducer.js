import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

// if state with no object so fill it with initial value
const Signed = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload
            }
        case SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                userId: null
            }
        default:
            return state
    }
};

export default Signed;

