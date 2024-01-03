import validator from 'validator';
import { reduxForm } from '../../../common/form';
import SignInView from './sign_in_view';

const REQUIRED = 'Required';
const INVALID_EMAIL_FORMAT = 'Invalid email format';

const validate = (values, _props) => {
  const errors = {};

  if (!values.get('email')) {
    errors.email = REQUIRED;
  } else if (!validator.isEmail(values.get('email'))) {
    errors.email = INVALID_EMAIL_FORMAT;
  }

  if (!values.get('password')) {
    errors.password = REQUIRED;
  }

  return errors;
};

const SignInForm = reduxForm({ form: 'signin', validate })(SignInView);

export default SignInForm;
