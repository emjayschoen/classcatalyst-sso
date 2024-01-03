import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailView from './confirm_email_view';
import { confirmEmail } from '../../actions';

const mapDispatchToProps = (
  dispatch,
  {
    match: {
      params: { token },
    },
  },
) => ({ confirmEmail: () => dispatch(confirmEmail(token)) });

const ConfirmEmailContainer = connect(undefined, mapDispatchToProps)(ConfirmEmailView);

ConfirmEmailContainer.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ token: PropTypes.string.isRequired }).isRequired }).isRequired,
};

export default ConfirmEmailContainer;
