import React from 'react';
import PropTypes from 'prop-types';
import ProfileStyles from './profile_styles';
import { Field, TextField } from '../../../common/form';
import Button from '../../../common/components/button';

const ProfileView = ({ handleSubmit, pristine, invalid, submitting }) => (
  <ProfileStyles>
    <h1>My Account</h1>
    <form onSubmit={handleSubmit}>
      <Field component={TextField} label="First Name" type="text" name="firstName" />
      <Field component={TextField} label="Last Name" type="text" name="lastName" />
      <Button primary buttonType="primary" type="submit" disabled={pristine || invalid || submitting}>
        {submitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  </ProfileStyles>
);

ProfileView.propTypes = {
  /** Function provided by reduxForm HOC to handle form submission */
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
};
ProfileView.defaultProps = {
  pristine: false,
  invalid: false,
  submitting: false,
};

export default ProfileView;
