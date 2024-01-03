import { reduxForm } from '../../../common/form';
import ResetPasswordView from './reset_password_view';

const REQUIRED = 'Required';
const MINIMUM_LENGTH = 'Password must be at least 4 characters long';
const MUST_MATCH_PASSWORD = 'Password and Password Confirmation must match';

const validate = (values, _props) => {
  const errors = {};

  if (!values.get('password')) {
    errors.password = REQUIRED;
  } else if (values.get('password').length < 4) {
    errors.password = MINIMUM_LENGTH;
  }

  if (!values.get('password_confirmation')) {
    errors.password_confirmation = REQUIRED;
  } else if (values.get('password') && values.get('password_confirmation') !== values.get('password')) {
    errors.password_confirmation = MUST_MATCH_PASSWORD;
  }

  return errors;
};

const ResetPasswordForm = reduxForm({ form: 'resetPassword', validate })(ResetPasswordView);

export default ResetPasswordForm;
