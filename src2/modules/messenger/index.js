import Component from './Messenger.jsx';
import * as actions from './actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentUserName: selectors.getCurrentUserName(state),
    isUserLoged: selectors.getCurrentStatus(state),
    currentMessageData: selectors.getCurrentMessageData(state)
});

const mapDispatchToProps = dispatch => ({
    logOutUser: () => dispatch(actions.onLogOut()),
    saveCurrentMessage: messageData => dispatch(actions.onSaveMessage(messageData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);