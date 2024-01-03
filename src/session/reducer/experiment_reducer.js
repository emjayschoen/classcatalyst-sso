import { Map } from 'immutable';
import { Util } from '@protastudios/prota-core-react';
import ACTIONS from '../actions';

const { combineImmutableReducers } = Util;

const DEFAULT_EXPERIMENT_MAP = new Map();

function byKey(state = DEFAULT_EXPERIMENT_MAP, action) {
  switch (action.type) {
    case ACTIONS.SET_EXPERIMENT: {
      const { key, treatment } = action;
      return state.set(key, treatment);
    }
    default:
      return state;
  }
}

const experimentReducer = combineImmutableReducers({
  byKey,
});

export default experimentReducer;

// Selectors

export const getTreatment = (state, key, defaultTreatment = undefined) => {
  const treatment = state.getIn(['byKey', key]);
  if (treatment === undefined) {
    return defaultTreatment;
  }
  return treatment;
};
