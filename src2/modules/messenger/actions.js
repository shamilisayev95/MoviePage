import constants from '../../constants';

export const onLogOut = payload => ({
    type: constants.LOG_OUT,
    payload,
});

export const onSaveMessage = messageData => ({
    type: constants.SAVE_CURRENT_MESSAGE,
    payload: {
        user: messageData.user,
        message: messageData.message
    }
})
