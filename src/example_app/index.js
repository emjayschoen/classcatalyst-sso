// Main entry point for example_app
import reducer, * as selectors from './reducer';
import RootView from './components/root_view';

export const ExampleAppReducer = reducer;
export const ExampleAppSelectors = selectors;

const ExampleApp = RootView;
export default ExampleApp;
