import React from 'react';
import { Checkbox } from 'redux-form-material-ui';

// eslint-disable-next-line react/jsx-props-no-spreading
const MuiCheckbox = (inputProps) => <Checkbox {...inputProps} value={inputProps.input.value.toString()} color="primary" onChange={inputProps.input.onChange} />;

export default MuiCheckbox;
