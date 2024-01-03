import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { SelectWrapper } from '../../styles/form';

const propTypes = {
  input: PropTypes.shape({ name: PropTypes.string, onChange: PropTypes.func }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string.isRequired, value: PropTypes.string.isRequired })).isRequired,
  isMulti: PropTypes.bool,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  meta: PropTypes.shape({ touched: PropTypes.bool, error: PropTypes.string, warning: PropTypes.bool }),
};

const defaultProps = {
  isMulti: false,
  required: false,
  meta: {},
};

const customStyles = {
  container: (provided, _state) => ({
    ...provided,
    marginTop: 9,
  }),
};

const ReactSelect = ({ input, options, label, required, isMulti, meta: { touched, error, warning } }) => (
  <SelectWrapper>
    {/* eslint-disable-next-line jsx-a11y/label-has-for */}
    <label htmlFor={input.name}>
      {label} {required ? '*' : ''}
      <Select
        styles={customStyles}
        onChange={(selections) => {
          let changeValue = null;
          if (Array.isArray(selections)) {
            changeValue = selections.map((selection) => selection.value);
          } else if (selections != null) {
            changeValue = selections.value;
          }
          input.onChange(changeValue);
        }}
        isMulti={isMulti}
        options={options}
        className={touched && error ? 'field-error' : ''}
      />
      {touched && ((error && <span className="error select-error">{error}</span>) || (warning && <span className="warning">{warning}</span>))}
    </label>
  </SelectWrapper>
);

ReactSelect.propTypes = propTypes;
ReactSelect.defaultProps = defaultProps;

export default ReactSelect;
