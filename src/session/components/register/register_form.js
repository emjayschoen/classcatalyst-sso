import validator from 'validator';
import { reduxForm } from '../../../common/form';
import RegisterView from './register_view';

const REQUIRED = 'Required';
const INVALID_EMAIL_FORMAT = 'Invalid email format';
const MINIMUM_LENGTH = 'Password must be at least 4 characters long';
const MUST_MATCH_PASSWORD = 'Password and Password Confirmation must match';

const validate = (values, { dirty }) => {
  const errors = {};

  if (dirty && !values.get('name')) {
    errors.name = REQUIRED;
  }

  const email = values.get('email');
  if (dirty && !email) {
    errors.email = REQUIRED;
  } else if (email && !validator.isEmail(values.get('email'))) {
    errors.email = INVALID_EMAIL_FORMAT;
  }

  const pw = values.get('password');
  if (dirty && !pw) {
    errors.password = REQUIRED;
  } else if (pw && pw.length < 4) {
    errors.password = MINIMUM_LENGTH;
  }

  const pwConf = values.get('password_confirmation');
  if (dirty && (!pwConf || pwConf === '')) {
    errors.password_confirmation = REQUIRED;
  } else if (pw && pwConf !== pw) {
    errors.password_confirmation = MUST_MATCH_PASSWORD;
  }

  return errors;
};

const RegisterForm = reduxForm({ form: 'register', validate })(RegisterView);

export default RegisterForm;
