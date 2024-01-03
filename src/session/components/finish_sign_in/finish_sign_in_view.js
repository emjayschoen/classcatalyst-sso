import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { parse } from 'query-string';
import { Redirect } from 'react-router';
import FinishSignInStyles from './finish_sign_in_styles';
import Spinner from '../../../common/components/spinner';

const propTypes = {
  signedIn: PropTypes.bool.isRequired,
  finishSignIn: PropTypes.func.isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
};

const defaultProps = {};

const FinishSignInView = ({ signedIn, finishSignIn, location: { search } }) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    finishSignIn().catch(() => {
      setLoading(false);
    });
  }, [finishSignIn]);
  if (signedIn || !isLoading) {
    const { returnTo } = parse(search);
    return (
      <Redirect
        to={{
          pathname: '/signin',
          state: {
            returnTo,
          },
        }}
      />
    );
  }
  return (
    <FinishSignInStyles>
      <Spinner />
    </FinishSignInStyles>
  );
};

FinishSignInView.propTypes = propTypes;
FinishSignInView.defaultProps = defaultProps;

export default FinishSignInView;
