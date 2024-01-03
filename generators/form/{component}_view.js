import React from 'react';
import PropTypes from 'prop-types';
import {className}Styles from './{snakeName}_styles';
import isValid from 'date-fns/isValid';
import {
  Field,
  reduxForm,
  TextField,
  FormSelect,
  MuiFormTheme,
  MuiThemeProvider,
  InputLabel,
  createTextMask,
  phoneMask,
  renderDatePicker,
  renderDateTimePicker,
} from '{rootPath}/common/form/form';

const propTypes = {
  prop: PropTypes.string,
};

const defaultProps = {
  prop: '{className} View',
};

const validate = (values) => {
  const errors = {};
  if (!values.get('name')) {
    errors.birthday = 'required';
  }
  if (!values.get('email')) {
    errors.email = 'required';
  }
  if (!values.get('phone')) {
    errors.phone = 'required';
  }
  if (!values.get('gender')) {
    errors.gender = 'required';
  }
  if (!values.get('birthday')) {
    errors.birthday = 'required';
  } else if (!isValid(new Date(values.get('birthday')))) {
    errors.birthday = 'Birthday must be a valid date';
  }
  if (!values.get('birthdayTime')) {
    errors.birthday = 'required';
  } else if (!isValid(new Date(values.get('birthday')))) {
    errors.birthday = 'Birthday must be a valid date and time';
  }
  return errors;
};

const {className} = ({
  handleSubmit, initialValues
}) => (
  <{className}Styles>
    <MuiThemeProvider theme={ MuiFormTheme }>
      <form onSubmit={ handleSubmit }>

        {/* Text Field */}
        <Field component={ TextField } label="Name" type="text" name="name" fullWidth required />

        {/* Email field */}
        <Field component={ TextField } label="Email Address" type="email" name="email" fullWidth required />

        {/* Phone field with Mask */}
        <Field component={ TextField } label="Phone Number" type="tel" { ...phoneMask } name="phone" fullWidth required />

        {/* Select Field */}
        <FormSelect
          label="Gender"
          name="gender"
          initialValue={ initialValues.gender }
          options={ [['m', 'Male'], ['f', 'Female']] }
        />

        {/* Date Field Calender */}
        <Field component={ TextField } label="Birthday" type="text" { ...dateMask } name="birthday" fullWidth required />
        <InputLabel shrink margin="dense" style={{ marginBottom: 0 }}>Birthday</InputLabel>
        <Field
          name="birthday"
          component={renderDatePicker}
          fullWidth
        />

        {/* Date Time Field Text Mask */}
        <Field component={ TextField } label="Birthday" type="text" { ...dateMask } name="birthdayTime" fullWidth required />
        <InputLabel shrink margin="dense" style={{ marginBottom: 0 }}>Birthday</InputLabel>
        <Field
          name="birthday"
          component={renderDateTimePicker}
          fullWidth
        />

      </form>
    </MuiThemeProvider>
  </{className}Styles>
);

{className}.propTypes = propTypes;
{className}.defaultProps = defaultProps;

const {className}View = reduxForm({ form: '{className}', validate, enableReinitialize: true })({className});

export default {className}View;
