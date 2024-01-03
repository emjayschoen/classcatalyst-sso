import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Util } from '@protastudios/prota-core-react';
import RegisterStyles from './register_styles';
import { Field, TextField } from '../../../common/form';
import Spinner from '../../../common/components/spinner';
import { OAUTH } from '../../../api';

const { useApiCall } = Util;

const propTypes = {
  signedIn: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  invalid: PropTypes.bool,
  location: PropTypes.shape({ state: PropTypes.shape({ returnTo: PropTypes.string }) }).isRequired,
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

const RegisterView = ({ signedIn, handleSubmit, pristine, invalid, location: { state } }) => {
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
    <RegisterStyles>
      <form onSubmit={onSubmit}>
        <h3>Sign Up</h3>
        <Field component={TextField} label="Name" type="text" name="name" fullWidth required />
        <Field component={TextField} label="Email" type="text" name="email" fullWidth required />
        <Field component={TextField} label="Password" type="password" name="password" fullWidth required />
        <Field component={TextField} label="Password Confirmation" type="password" name="password_confirmation" fullWidth required />
        <input type="submit" className="btn" value="Register" disabled={pristine || invalid || submitting} />
        <span className="status">
          {failed && <span className="error">Unable to register a new account.</span>}
          {submitting && <Spinner />}
        </span>
        {OAUTH.canRegister && OAUTH.providers.size > 0 && oauthRow}
        <p>
          <Link to="/signin">Already have an account?</Link>
        </p>
      </form>
    </RegisterStyles>
  );
};

RegisterView.propTypes = propTypes;
RegisterView.defaultProps = defaultProps;

export default RegisterView;
