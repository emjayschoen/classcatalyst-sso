import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'material-ui-pickers';
import 'react-datepicker/dist/react-datepicker.css';

// Material UI Date Picker Helpers
// https://material-ui-pickers.firebaseapp.com/
// * These form inputs remove native datepicker functionality
// * Formating of Date is Rails compatible
// * Formating occurs during save into redux store

const propTypes = {
  showErrorsInline: PropTypes.bool,
  input: PropTypes.shape({ onChange: PropTypes.func, value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]) }),
  meta: PropTypes.shape({ touched: PropTypes.bool, error: PropTypes.bool }),
  id: PropTypes.string.isRequired,
};

const defaultProps = {
  showErrorsInline: false,
  input: { onChange: () => {}, value: undefined },
  meta: { touched: false, error: false },
};

const dateMask = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

const MuiDatePicker = (props) => {
  const {
    showErrorsInline,
    input: { onChange, value },
    meta: { touched, error },
    id,
    ...others
  } = props;

  const showError = showErrorsInline || touched;

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <DatePicker
      id={id}
      keyboard
      clearable
      format="MM-dd-yyyy"
      placeholder="MM-DD-YYYY"
      mask={(val) => (val ? dateMask : [])}
      error={!!(showError && error)}
      helperText={showError && error}
      value={value !== '' ? new Date(value) : null}
      onChange={onChange}
      fullWidth
      {...others}
    />
  );
};

MuiDatePicker.propTypes = propTypes;
MuiDatePicker.defaultProps = defaultProps;

export default MuiDatePicker;
