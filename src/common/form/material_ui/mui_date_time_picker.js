import React from 'react';
import PropTypes from 'prop-types';
import { DateTimePicker } from 'material-ui-pickers';
import 'react-datepicker/dist/react-datepicker.css';

// Material UI Date Time Picker Helpers
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

export const dateTimeMask = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M'];

const MuiDateTimePicker = (props) => {
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
    <DateTimePicker
      id={id}
      keyboard
      clearable
      format="MM-dd-yyyy hh:mm a"
      placeholder="MM-DD-YYYY HH:MM A"
      mask={(val) => (val ? dateTimeMask : [])}
      error={!!(showError && error)}
      helperText={showError && error}
      value={value || null}
      onChange={onChange}
      fullWidth
      {...others}
    />
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

export default MuiDateTimePicker;

MuiDateTimePicker.propTypes = propTypes;
MuiDateTimePicker.defaultProps = defaultProps;
