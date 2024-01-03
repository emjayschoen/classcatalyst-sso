import { fromJS, Map } from 'immutable';
import ACTIONS from './actions';

const initialState = new Map();

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_GLOBAL_SETTINGS:
      return state.merge(fromJS(action.settings || {}));
    default:
      return state;
  }
}

// Selectors

export function getSetting(state, key, notSetValue = undefined) {
  return state.get(key, notSetValue);
}

export default reducer;
