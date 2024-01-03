import { connect } from 'react-redux';
import FinishSignInView from './finish_sign_in_view';
import { getCurrentUser } from '../../../reducer';
import { finishSignIn } from '../../actions';

const mapStateToProps = (state) => ({
  signedIn: getCurrentUser(state).signedIn,
});

const mapDispatchToProps = {
  finishSignIn,
};

const FinishSignInContainer = connect(mapStateToProps, mapDispatchToProps)(FinishSignInView);

export default FinishSignInContainer;
