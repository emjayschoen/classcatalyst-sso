import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Spinner from '../../../common/components/spinner';

const propTypes = {
  signedIn: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
};

const SignOutView = ({ signedIn, signOut }) => {
  useEffect(() => {
    signOut();
  });
  return signedIn ? <Spinner /> : <Redirect to="/" />;
};

SignOutView.propTypes = propTypes;

export default SignOutView;
