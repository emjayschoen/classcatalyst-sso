import { Util } from '@protastudios/prota-core-react';
import ACTIONS from './actions';

const { combineImmutableReducers } = Util;

export const ContactFormStatusReducer = (state = null, action) => {
  switch (action.type) {
    case ACTIONS.CONTACT_FORM_SUBMITTED:
      return 'submitting';
    case ACTIONS.CONTACT_FORM_SUCCESS:
      return 'success';
    case ACTIONS.CONTACT_FORM_FAILED:
      return 'failed';
    default:
      return state;
  }
};

const reducer = combineImmutableReducers({
  contactFormStatus: ContactFormStatusReducer,
});

export default reducer;

// Selectors
export const getContactFormStatus = (state) => state.get('contactFormStatus');
