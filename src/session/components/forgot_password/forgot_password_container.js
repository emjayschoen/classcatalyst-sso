import { connect } from 'react-redux';
import { getCurrentUser } from '../../../reducer';
import ForgotPasswordForm from './forgot_password_form';
import { forgotPassword } from '../../actions';

const mapStateToProps = (state) => ({
  signedIn: getCurrentUser(state).signedIn,
});

const mapDispatchToProps = {
  onSubmit: (args) => forgotPassword(args.get('email')),
};

const ForgotPasswordContainer = connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm);

export default ForgotPasswordContainer;
