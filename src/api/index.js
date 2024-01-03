import { normalize } from 'normalizr';
import * as schema from './schema';
import * as RealBackend from './real_backend';
import * as MockBackend from './mock_backend';

let SelectedBackend;

if (process.env.REACT_APP_API_ENDPOINT === undefined) {
  SelectedBackend = MockBackend;
} else {
  SelectedBackend = RealBackend;
}

const normalizeWidget = (response) => normalize(response.data, schema.widget);
const normalizeWidgets = (response) => normalize(response.data, [schema.widget]);

export const signIn = (email, password) => SelectedBackend.signIn(email, password);
export const finishSignIn = () => SelectedBackend.finishSignIn();
export const register = (info) => SelectedBackend.register(info);
export const confirmEmail = (token) => SelectedBackend.confirmEmail(token);
export const updateCurrentUser = (token, props) => SelectedBackend.updateCurrentUser(token, props);

export const forgotPassword = (email) => SelectedBackend.forgotPassword(email);
export const resetPassword = (token, password) => SelectedBackend.resetPassword(token, password);

export const listWidgets = () => SelectedBackend.listWidgets().then(normalizeWidgets);
export const updateWidget = (uid, props) => SelectedBackend.updateWidget(uid, props).then(normalizeWidget);

export const { OAUTH } = SelectedBackend;
