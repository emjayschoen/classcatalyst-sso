import axios from 'axios';
import { contactFormSubmitted, contactFormFailed, contactFormSuccess } from './actions';

const Config = {
  portalId: 'CHANGEME',
  formId: 'CHANGEME',
};

const FormEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${Config.portalId}/${Config.formId}`;

// re-map redux form object to array of objects
const valuesToFields = (values) => Object.entries(values.toObject()).map((i) => ({ name: i[0], value: i[1] }));

export const postContactForm = ({ values, dispatch }) => {
  dispatch(contactFormSubmitted(values));
  axios
    .post(FormEndpoint, { fields: valuesToFields(values) })
    .then((response) => dispatch(contactFormSuccess(response)))
    .catch((error) => dispatch(contactFormFailed(error)));
};

export default {};
