import { connect } from 'react-redux';
import HomeView from './home_view';
// import { SomeSelectors } from '../../../reducer';
// import { SomeActions } from '../../actions';

// Pull specific state out of the Redux store that you need to render
// this component's view using this function.
// Do not retrieve any state that is not used directly by the view.
// Do not associate full objects when all you need are Ids.
// Let child components pull their own properties.
//
// mapStateToProps(dispatch, { prop })
const mapStateToProps = () => ({
  // prop assignments
});

// Wire up specific actions using this function. If you directly map an
// action creator, it will be automatically wrapped with `dispatch()`,
// so do not define new functions here unless you need to override or
// explicitly specify a parameter of an action creator based on the
// nature of the component or its props.
//
// mapDispatchToProps(dispatch, { prop })
const mapDispatchToProps = () => ({
  // action creator assignments
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeView);

export default HomeContainer;
