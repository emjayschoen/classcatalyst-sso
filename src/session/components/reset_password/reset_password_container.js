import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../../reducer';
import ResetPasswordForm from './reset_password_form';
import { resetPassword } from '../../actions';

const mapStateToProps = (state) => ({
  signedIn: getCurrentUser(state).signedIn,
});

const mapDispatchToProps = (
  dispatch,
  {
    match: {
      params: { token },
    },
  },
) => {
  const onSubmit = (args) => dispatch(resetPassword(token, args.get('password')));
  return { onSubmit };
};

const ResetPasswordContainer = connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);

ResetPasswordContainer.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ token: PropTypes.string.isRequired }).isRequired }).isRequired,
};

export default ResetPasswordContainer;
