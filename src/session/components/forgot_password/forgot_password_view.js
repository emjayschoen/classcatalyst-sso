import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Util } from '@protastudios/prota-core-react';
import ForgotPasswordStyles from './forgot_password_styles';
import { Field, TextField } from '../../../common/form';
import Spinner from '../../../common/components/spinner';

const { useApiCall } = Util;

const propTypes = {
  signedIn: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  invalid: PropTypes.bool,
};

const defaultProps = {
  pristine: false,
  invalid: false,
};

const ForgotPasswordView = ({ signedIn, handleSubmit, pristine, invalid }) => {
  const [onSubmit, { submitting, failed, success }] = useApiCall(handleSubmit);

  if (signedIn) {
    // Redirect to profile page if already signed in...
    return <Redirect to="/profile" />;
  }

  let content;
  if (success) {
    content = <p>Check your inbox for an email with a password reset link.</p>;
  } else {
    content = (
      <Fragment>
        <Field component={TextField} label="Email" type="text" name="email" fullWidth required />
        <input type="submit" className="btn" value="Request Password Reset" disabled={pristine || invalid || submitting} />
        <span className="status">
          {failed && <span className="error">Please try again...</span>}
          {submitting && <Spinner />}
        </span>
      </Fragment>
    );
  }

  return (
    <ForgotPasswordStyles>
      <form onSubmit={onSubmit}>
        <h3>Forgot your password?</h3>
        {content}
        <p>
          <Link to="/signin">Sign in</Link>
          <span style={{ padding: '0 1em' }}>|</span>
          <Link to="/register">Don&apos;t have an account?</Link>
        </p>
      </form>
    </ForgotPasswordStyles>
  );
};

ForgotPasswordView.propTypes = propTypes;
ForgotPasswordView.defaultProps = defaultProps;

export default ForgotPasswordView;
