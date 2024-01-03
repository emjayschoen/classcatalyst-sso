import React from 'react';
import PropTypes from 'prop-types';
import ContactFormStyles from './contact_form_styles';
import { Field, reduxForm, TextField, MuiFormTheme, MuiThemeProvider } from '../../../common/form';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  status: PropTypes.string,
};

const defaultProps = {
  status: '',
};

const validate = (values) => {
  const errors = {};
  if (!values.get('email')) {
    errors.email = 'required';
  }
  return errors;
};

const ContactForm = ({
  // eslint-disable-next-line react/prop-types
  handleSubmit,
  status,
}) => (
  <ContactFormStyles>
    <h2>Sign up for updates</h2>
    {status === 'success' ? (
      <div className="status">Thank you for signing up!</div>
    ) : (
      <MuiThemeProvider theme={MuiFormTheme}>
        <form onSubmit={handleSubmit}>
          {status === 'error' && <div>Sorry, Something went wrong...</div>}
          <div className="row">
            <div className="col-sm-3">
              <Field component={TextField} label="First Name" type="text" name="firstname" fullWidth />
            </div>
            <div className="col-sm-3">
              <Field component={TextField} label="Last Name" type="text" name="lastname" fullWidth />
            </div>
            <div className="col-sm-4">
              <Field component={TextField} label="Email Address" name="email" type="email" fullWidth required />
            </div>
            <div className="col-sm-2">
              <input type="submit" className="btn primary" style={{ width: '100%' }} value="Sign Up" />
            </div>
          </div>
        </form>
      </MuiThemeProvider>
    )}
  </ContactFormStyles>
);

ContactForm.propTypes = propTypes;
ContactForm.defaultProps = defaultProps;

const ContactFormView = reduxForm({
  form: 'ContactForm',
  validate,
  enableReinitialize: true,
})(ContactForm);

export default ContactFormView;
