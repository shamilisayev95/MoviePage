import constants from '../../constants';

const initialState = {
    user: null,
    message: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_CURRENT_MESSAGE:
            return {
                ...state,
                user: action.payload.user,
                message: action.payload.message
            }
        default:
            return state;
    }
}
