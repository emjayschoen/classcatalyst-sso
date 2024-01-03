import validator from 'validator';
import { reduxForm } from '../../../common/form';
import ForgotPasswordView from './forgot_password_view';

const REQUIRED = 'Required';
const INVALID_EMAIL_FORMAT = 'Invalid email format';
const MINIMUM_LENGTH = 'Password must be at least 4 characters long';

const validate = (values, _props) => {
  const errors = {};

  if (!values.get('email')) {
    errors.email = REQUIRED;
  } else if (!validator.isEmail(values.get('email'))) {
    errors.email = INVALID_EMAIL_FORMAT;
  }

  if (!values.get('password')) {
    errors.password = REQUIRED;
  } else if (values.get('password').length < 4) {
    errors.password = MINIMUM_LENGTH;
  }

  return errors;
};

const ForgotPasswordForm = reduxForm({ form: 'forgotPassword', validate })(ForgotPasswordView);

export default ForgotPasswordForm;
