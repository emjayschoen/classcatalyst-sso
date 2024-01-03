import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HeaderStyles from './header_styles';

const propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

const defaultProps = {};

const HeaderView = ({ signedIn }) => (
  <HeaderStyles>
    <header>
      <h2>Example App</h2>
      {(signedIn && <Link to="/signout">Sign Out</Link>) || <Link to="/signin">Sign In</Link>}
    </header>
  </HeaderStyles>
);

HeaderView.propTypes = propTypes;
HeaderView.defaultProps = defaultProps;

export default HeaderView;
