import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router/immutable';
import { fromJS, Map } from 'immutable';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';
import UserModel from './session/models/user_model';
import FlashModel from './session/models/flash_model';
import SessionModel from './session/models/session_model';
import WidgetModel from './example_app/models/widget_model';

const history = createBrowserHistory();

const middleware = [applyMiddleware(routerMiddleware(history), thunk)];

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-underscore-dangle
  const devtool = window.__REDUX_DEVTOOLS_EXTENSION__ || window.devToolsExtension;
  if (devtool) {
    middleware.push(devtool());
  }
}

const createStoreWithMiddleware = compose(...middleware)(createStore);

const records = [UserModel, FlashModel, SessionModel, WidgetModel];
const transformImmutable = immutableTransform({ records });

const persistConfig = {
  key: 'rv1',
  storage,
  stateReconciler: (inboundState, state, reducedState) => reducedState.mergeDeep(fromJS(inboundState)),
  transforms: [transformImmutable],
  blacklist: ['router', 'form', 'hubSpotForm'],
};

export function store(initialState = new Map()) {
  const persistedReducer = persistReducer(persistConfig, rootReducer(history));
  const myStore = createStoreWithMiddleware(persistedReducer, initialState);
  const persistor = persistStore(myStore);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducer', () => {
        // eslint-disable-next-line global-require,import/newline-after-import
        const nextRootReducer = require('./reducer');
        const nextPersistReducer = persistReducer(nextRootReducer(history));
        myStore.replaceReducer(nextPersistReducer);
      });
    }
  }

  return { store: myStore, history, persistor };
}

export default store;
