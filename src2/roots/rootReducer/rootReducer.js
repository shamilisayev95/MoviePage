import { combineReducers } from 'redux';
import login from '../../manager/login/reducer';
import messenger from '../../manager/messenger/reducer';

export default combineReducers({
    login, messenger
});
