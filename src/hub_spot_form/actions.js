// import * as api from '../../api';

const ACTIONS = {
  CONTACT_FORM_SUBMITTED: 'ContactForm:Submited',
  CONTACT_FORM_SUCCESS: 'ContactForm:Success',
  CONTACT_FORM_FAILED: 'ContactForm:Failed',
};

export default ACTIONS;

export const contactFormSubmitted = (values) => ({
  type: ACTIONS.CONTACT_FORM_SUBMITTED,
  values,
});

export const contactFormSuccess = () => ({
  type: ACTIONS.CONTACT_FORM_SUCCESS,
});

export const contactFormFailed = (error) => ({
  type: ACTIONS.CONTACT_FORM_FAILED,
  error,
});
