import { fromJS } from 'immutable';
import { Util } from '@protastudios/prota-core-react' ;
const { combineImmutableReducers } = Util;
import ACTIONS from './actions';
// const DEFAULT_MAP = new Map();
// const DEFAULT_LIST = new List();

function SampleReducer(state = undefined, action) {
  switch (action.type) {
  case ACTIONS.SOME_ACTION:
    return fromJS(action.some_prop);
  default:
    return state;
  }
}

const {className}Reducer = combineImmutableReducers({
  sample: SampleReducer,
});

export default {className}Reducer;

// Selectors
// export const getSample = state => state.get('sample');
