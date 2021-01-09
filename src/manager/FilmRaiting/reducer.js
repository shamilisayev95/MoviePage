import constants from '../../constants/index';

const initialState = {
    saveCardData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_CARDS:
            return {
                ...state,
                saveCardData: action.payload,
            }
        default:
            return state;
    }
}