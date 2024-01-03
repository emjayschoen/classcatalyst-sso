import ACTIONS from '../actions';

const DEFAULT_STATUS_MAP = {};

function StatusReducer(state = DEFAULT_STATUS_MAP, action) {
  switch (action.type) {
    case ACTIONS.USERFORM_SUBMITTING:
      return { ...state, success: null, error_message: 'The form is being submitted...' };
    case ACTIONS.USERFORM_SUCCESS:
      return { ...state, success: true, error_message: '' };
    case ACTIONS.USERFORM_FAILURE:
      return { ...state, success: false, error_message: action.error.response.data.join(' ') };
    default:
      return state;
  }
}

export default StatusReducer;
