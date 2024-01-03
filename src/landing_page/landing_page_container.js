import { connect } from 'react-redux';
import LandingPageView from './landing_page_view';
// import { getPageByTitle } from '../reducer';
// import {  } from '../actions';

// Pull specific state out of the Redux store that you need to render
// this component's view using this function.
// Do not retrieve any state that is not used directly by the view.
// Do not associate full objects when all you need are Ids.
// Let child components pull their own properties.
//
// mapStateToProps(dispatch, { prop })
const mapStateToProps = () => ({
  // prop assignments
  // page: getPageByTitle(state, 'Home'),
});

// Wire up specific actions using this function. If you directly map an
// action creator, it will be automatically wrapped with `dispatch()`,
// so do not define new functions here unless you need to override or
// explicitly specify a parameter of an action creator based on the
// nature of the component or its props.
//
// mapDispatchToProps(dispatch, { prop })
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({
  // action creator assignments
});

const LandingPageContainer = connect(mapStateToProps, mapDispatchToProps)(LandingPageView);

export default LandingPageContainer;
