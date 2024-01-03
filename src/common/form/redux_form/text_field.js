import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from '../../styles/form';

const propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({ name: PropTypes.string, onChange: PropTypes.func, value: PropTypes.string }),
  meta: PropTypes.shape({ touched: PropTypes.bool, error: PropTypes.string, warning: PropTypes.string }),
  type: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
  rows: PropTypes.number,
  required: PropTypes.bool,
};

const defaultProps = {
  input: { onChange: () => {}, value: undefined },
  meta: { touched: false, error: undefined },
  textarea: false,
  rows: 1,
  required: true,
};

/* eslint-disable react/jsx-props-no-spreading */
const TextField = ({ input, label, type, textarea, rows, required, meta: { touched, error, warning } }) => (
  <InputGroup>
    {/* eslint-disable-next-line jsx-a11y/label-has-for */}
    <label htmlFor={input.name}>
      {label} {required ? '*' : ''}
      {textarea && <textarea {...input} id={input.name} rows={rows} className={touched && error ? 'field-error' : ''} />}
      {!textarea && <input id={input.name} {...input} placeholder={label} type={type} className={touched && error ? 'field-error' : ''} />}
      {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="warning">{warning}</span>))}
    </label>
  </InputGroup>
);

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
