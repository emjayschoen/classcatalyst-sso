import React from 'react';
import PropTypes from 'prop-types';
import {className}Styles from './{snakeName}_styles';

const propTypes = {
  propA: PropTypes.string,
  propB: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  propA: '{className} View',
  propB: false,
  children: undefined,
};

const {className}View = ({ propA, propB, children }) => (
  <{className}Styles>
    <h2>{propA}</h2>
    {children}
    {propB && <footer>WOOT!</footer>}
  </{className}Styles>
);

{className}View.propTypes = propTypes;
{className}View.defaultProps = defaultProps;

export default {className}View;
