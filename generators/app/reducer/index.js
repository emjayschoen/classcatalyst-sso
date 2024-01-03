import { fromJS } from 'immutable';
import { Util } from '@protastudios/prota-core-react' ;
import ACTIONS from '../actions';
// const DEFAULT_MAP = new Map();
// const DEFAULT_LIST = new List();

export const SampleReducer = (state = undefined, action) => {
  switch (action.type) {
  case ACTIONS.SOME_ACTION:
    return fromJS(action.some_prop);
  default:
    return state;
  }
};

const { combineImmutableReducers } = Util;
const {className}Reducer = combineImmutableReducers({
  sample: SampleReducer,
});

export default {className}Reducer;

// Selectors
// export const getSample = state => state.get('sample');
