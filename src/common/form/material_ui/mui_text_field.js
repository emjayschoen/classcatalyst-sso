import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  input: PropTypes.shape({}).isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({ error: PropTypes.string, pristine: PropTypes.bool }).isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

const defaultProps = {
  label: undefined,
  disabled: false,
  required: false,
};

const MuiTextField = ({ input, label, type, meta: { pristine, error }, disabled, required }) => (
  <div className={error ? 'error' : ''}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <input {...input} placeholder={label} type={type} disabled={disabled} required={required} />
    {!pristine && error && <span className="error">{error}</span>}
  </div>
);

MuiTextField.propTypes = propTypes;
MuiTextField.defaultProps = defaultProps;

export default MuiTextField;
