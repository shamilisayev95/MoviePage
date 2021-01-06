import constants from '../../constants';

export const onSaveCurrentUser = user => ({
    type: constants.LOG_IN,
    payload: user,
});
