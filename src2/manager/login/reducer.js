import constants from '../../constants';

const initialState = {
    currentUser: null,
    isLoged: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.LOG_IN:
            return {
                ...state,
                currentUser: action.payload,
                isLoged: true
            }
        case constants.LOG_OUT:
            return {
                ...state,
                currentUser: null,
                isLoged: false
            }
        default:
            return state;
    }
}
