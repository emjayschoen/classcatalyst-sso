import { connect } from 'react-redux';
import SignOutView from './sign_out_view';
import { getCurrentUser } from '../../../reducer';
import { signOut } from '../../actions';

const mapStateToProps = (state) => ({
  signedIn: getCurrentUser(state).signedIn,
});

const mapDispatchToProps = {
  signOut,
};

const SignOutContainer = connect(mapStateToProps, mapDispatchToProps)(SignOutView);

export default SignOutContainer;
