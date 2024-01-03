import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dismissFlash } from '../../actions';
import FlashView from './flash_view';

// Wire up onFadeoutComplete to trigger a dismissFlash Redux action
const mapDispatchToProperties = (dispatch, { flashId }) => ({
  onFadeoutComplete: () => dispatch(dismissFlash(flashId)),
});

// We don't need any state from Redux (FlashList takes care of populating our props),
// so we don't pass in a mapStateToProps function.  We do, however, need to wire up
// a dispatch action, so pass mapDispatchToProps as the second parameter to connect().
const FlashContainer = connect(undefined, mapDispatchToProperties)(FlashView);

FlashContainer.propTypes = {
  flashId: PropTypes.number, // Which flash message are we referring to?
};

export default FlashContainer;
