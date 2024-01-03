import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MockAuthStyles from './mock_auth_styles';
import { OAUTH } from '../../../api';

const propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ provider: PropTypes.string, returnTo: PropTypes.string }) }).isRequired,
};

const defaultProps = {};

const MockAuthView = ({
  match: {
    params: { provider, returnTo },
  },
}) => {
  useEffect(() => {
    OAUTH.pendingOauth = true;
  }, []);
  return (
    <MockAuthStyles>
      <h3>{`This is not ${provider}.`}</h3>
      <p>Sorry to disappoint you, but this is just a simulation...</p>
      <Link to={`/finish_signin?returnTo=${returnTo || '/'}`}>Finish signing in</Link>
    </MockAuthStyles>
  );
};

MockAuthView.propTypes = propTypes;
MockAuthView.defaultProps = defaultProps;

export default MockAuthView;
