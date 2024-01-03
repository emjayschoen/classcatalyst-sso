import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { ThemeProvider } from 'styled-components';
import theme from '../src/common/theme';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Util } from '@protastudios/prota-core-react';
import configureStore from '../src/store';

const { ErrorBoundary } = Util;
const { store, history } = configureStore();
global.store = store;

export const decorators = [
  storyFn => (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              {storyFn()}
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </ConnectedRouter>
    </Provider>
  ),
];

export const parameters = {
  controls: { expanded: true },
};
