import Component from './FilmRating';
import * as selectors from './selectors';
import * as actions from './actions';
import { connect } from "react-redux";

const mapStateToProps = state => ({
    saveCard: selectors.getSaveCard(state),
});
const mapDispatchToProps = dispatch => ({
    saveCardsData: data => dispatch(actions.saveCardData(data)),
});


export default connect(mapStateToProps,mapDispatchToProps)(Component);