import Component from './Login.jsx';
import * as actions from './actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentUserName: selectors.getCurrentUserName(state),
    isUserLoged: selectors.getCurrentStatus(state),
});

const mapDispatchToProps = dispatch => ({
    saveCurrentUser: user => dispatch(actions.onSaveCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
