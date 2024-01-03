import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Util } from '@protastudios/prota-core-react';
import SignInStyles from './sign_in_styles';
import { Field, TextField } from '../../../common/form';
import Spinner from '../../../common/components/spinner';
import { OAUTH } from '../../../api';

const { useApiCall } = Util;

const propTypes = {
  signedIn: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  invalid: PropTypes.bool,
  location: PropTypes.shape({
    state: PropTypes.shape({
      returnTo: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ pathname: PropTypes.string })]),
    }),
  }).isRequired,
};

const defaultProps = {
  pristine: false,
  invalid: false,
};

const oauthButton = (provider, returnTo) => (
  <a key={provider} href={OAUTH.getUrl(provider, returnTo)} className="oauth-button">
    {provider === 'developer' ? <i className="fas fa-user-secret fa-2x" /> : <i className={`fab fa-${provider} fa-5x`} />}
  </a>
);

const DEFAULT_RETURN_TO = '/dashboard';

const SignInView = ({ signedIn, handleSubmit, pristine, invalid, location: { state } }) => {
  const [onSubmit, { submitting, failed }] = useApiCall(handleSubmit);
  const returnTo = (state && state.returnTo) || DEFAULT_RETURN_TO;

  if (signedIn) {
    return <Redirect to={returnTo} />;
  }

  const oauthRow = (
    <div className="oauth-row">
      <span>Sign in with:</span>
      {OAUTH.providers.map((provider) => oauthButton(provider, returnTo))}
    </div>
  );

  return (
    <SignInStyles>
      <form onSubmit={onSubmit}>
        <h3>Sign In</h3>
        <Field component={TextField} label="Email" type="text" name="email" fullWidth required />
        <Field component={TextField} label="Password" type="password" name="password" fullWidth required />
        <input type="submit" className="btn" value="Login" disabled={pristine || invalid || submitting} />
        <span className="status">
          {failed && <span className="error">Invalid credentials</span>}
          {submitting && <Spinner />}
        </span>
        {OAUTH.providers.size > 0 && oauthRow}
        <p>
          <Link to="/forgot">Lost your password?</Link>
          <span style={{ padding: '0 1em' }}>|</span>
          <Link to="/register">Don&apos;t have an account?</Link>
        </p>
      </form>
    </SignInStyles>
  );
};

SignInView.propTypes = propTypes;
SignInView.defaultProps = defaultProps;

export default SignInView;
