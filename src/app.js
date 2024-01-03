import React from 'react';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Util } from '@protastudios/prota-core-react';
import './app.css';
import theme from './common/theme';
import configureStore from './store';
import ExampleApp from './example_app';
import LandingPage from './landing_page';
import { setTreatment } from './session/actions';

const { ErrorBoundary, featureFlag } = Util;

export const { store, history } = configureStore();

global.setTreatment = (key, value) => store.dispatch(setTreatment(key, value));
global.showApp = () => global.setTreatment('showApp', 'party time!');
global.hideApp = () => global.setTreatment('showApp', false);

const Root = featureFlag('showApp', { enabled: ExampleApp, alt: LandingPage });

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Root />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </ConnectedRouter>
  </Provider>
);

export default App;
