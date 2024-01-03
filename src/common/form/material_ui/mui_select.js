import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import { Select } from 'redux-form-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class MuiSelect extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.shape([]).isRequired,
    onChange: PropTypes.func,
    initialValue: PropTypes.node,
  };

  static defaultProps = {
    onChange: (event, value) => [event, value],
    initialValue: null,
  };

  componentDidMount() {
    const { initialValue, onChange } = this.props;
    if (initialValue && onChange) onChange({}, initialValue);
  }

  render() {
    const { label, name, options, onChange } = this.props;
    return (
      <FormControl fullWidth className="mui-field">
        <InputLabel htmlFor="select-multiple-checkbox">{label}</InputLabel>
        <Field component={Select} onChange={onChange} fullWidth name={name}>
          {options.map((option) => (
            <MenuItem key={option[0]} value={option[0]}>
              {option[1]}
            </MenuItem>
          ))}
        </Field>
      </FormControl>
    );
  }
}

export default MuiSelect;
