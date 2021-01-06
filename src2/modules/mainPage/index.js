import Component from './MainPage.jsx';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isUserLoged: selectors.getCurrentStatus(state),
});

export default connect(mapStateToProps)(Component);
