import { connect } from 'react-redux';
import { getCurrentUser } from '../../../reducer';
import SignInForm from './sign_in_form';
import { signIn } from '../../actions';

const mapStateToProps = (state) => ({
  signedIn: getCurrentUser(state).signedIn,
});

const mapDispatchToProps = {
  onSubmit: (args) => signIn(args.get('email'), args.get('password')),
};

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignInForm);

export default SignInContainer;
