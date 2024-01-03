import React from 'react';
import PropTypes from 'prop-types';
import NavbarStyles from './navbar_styles';

const propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

const defaultProps = {};

const NavbarView = ({ signedIn }) => (
  <NavbarStyles>
    <h3>NAV BAR</h3>
    <p>
      You are currently
      {signedIn ? ' signed in!' : ' signed out!'}
    </p>
  </NavbarStyles>
);

NavbarView.propTypes = propTypes;
NavbarView.defaultProps = defaultProps;

export default NavbarView;
