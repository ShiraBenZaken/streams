const INITIAL_STATE = {
    isSignedIn: null
};

// if state with no object so fill it with initial value
const Signed = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isSignedIn: true
            }
        case 'SIGN_OUT':
            return {
                ...state,
                isSignedIn: false
            }
        default:
            return state
    }
};

export default Signed;