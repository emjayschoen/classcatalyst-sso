import { reduxForm } from 'redux-form/lib/immutable';
import ProfileView from './profile_view';

const validate = (values) => {
  const errors = {};
  if (!values.get('firstName')) {
    errors.firstName = 'required';
  }
  if (!values.get('lastName')) {
    errors.lastName = 'required';
  }
  const pw = values.get('password');
  if (pw && pw.length < 4) {
    errors.password = 'is not long enough';
  }
  if (pw !== values.get('passwordConfirmation')) {
    errors.passwordConfirmation = 'does not match password';
  }
  return errors;
};

const ProfileForm = reduxForm({
  form: 'userForm',
  validate,
  enableReinitialize: true,
})(ProfileView);

export default ProfileForm;
