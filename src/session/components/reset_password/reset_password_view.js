import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Util } from '@protastudios/prota-core-react';
import ResetPasswordStyles from './reset_password_styles';
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

const DEFAULT_RETURN_TO = '/';

const ResetPasswordView = ({ signedIn, handleSubmit, pristine, invalid }) => {
  const [onSubmit, { submitting, failed, success }] = useApiCall(handleSubmit);

  if (signedIn) {
    return <Redirect to={DEFAULT_RETURN_TO} />;
  }

  let content;
  if (submitting) {
    content = <Spinner />;
  } else if (success) {
    content = (
      <p>
        Your password has been reset. Please <Link to="/signin">sign in</Link>.
      </p>
    );
  } else if (failed) {
    content = (
      <Fragment>
        <p>
          <span className="error">We were unable to reset your password with the token provided.</span>
        </p>
        <p>
          Please either <Link to="/forgot">request a new reset token</Link> or <Link to="/register">register a new account</Link>.
        </p>
      </Fragment>
    );
  } else {
    content = (
      <form onSubmit={onSubmit}>
        <Field component={TextField} label="New Password" type="password" name="password" fullWidth required />
        <Field component={TextField} label="Confirm New Password" type="password" name="password_confirmation" fullWidth required />
        <input type="submit" className="btn" value="Reset Password" disabled={pristine || invalid || submitting} />
        <span className="status">{submitting && <Spinner />}</span>
      </form>
    );
  }

  return (
    <ResetPasswordStyles>
      <h3>Reset your password</h3>
      {content}
    </ResetPasswordStyles>
  );
};

ResetPasswordView.propTypes = propTypes;
ResetPasswordView.defaultProps = defaultProps;

export default ResetPasswordView;
