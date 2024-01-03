// Main entry point for Session management/info
import { Util } from '@protastudios/prota-core-react';
import Session from '../models/session_model';
import UserReducer from './user_reducer';
import FlashReducer from './flash_reducer';
import ExperimentReducer, { getTreatment as getExperimentTreatment } from './experiment_reducer';

const { combineImmutableReducers } = Util;
const DEFAULT_SESSION = new Session();

const REDUCERS = {
  currentUser: UserReducer,
  flashList: FlashReducer,
  experiments: ExperimentReducer,
};

// As this is not a leaf-node, the reducer follows the very simple pattern
// of combining child reducers, which are each responsible for one child attribute.
const Reducer = combineImmutableReducers(REDUCERS, DEFAULT_SESSION);

export default Reducer;

// Selectors
// Note: these functions operate on state at the level of the SessionReducer, not the RootReducer.
export const getCurrentUser = (state) => state.currentUser;
export const getFlashList = (state) => state.flashList;
export const getTreatment = (state, experiment, defaultTreatment) => getExperimentTreatment(state.experiments, experiment, defaultTreatment);
