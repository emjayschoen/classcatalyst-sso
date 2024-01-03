import { Util } from '@protastudios/prota-core-react';
import StatusReducer from './status_reducer';
import WidgetReducer from './widget_reducer';

const { combineImmutableReducers } = Util;

const REDUCERS = {
  formStatus: StatusReducer,
  widgets: WidgetReducer,
};

const Reducer = combineImmutableReducers(REDUCERS);

export default Reducer;

// Selectors
// Note: these functions operate on state at the level of the ExampleApp, not the RootReducer.
export const getFormStatus = (state) => state.get('formStatus');

export const getWidget = (state, id) => WidgetReducer.selectors.getOne(state.get('widgets'), id);
export const getWidgets = (state, list) => WidgetReducer.selectors.getList(state.get('widgets'), list);
