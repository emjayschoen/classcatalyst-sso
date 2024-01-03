import Axios from 'axios';
import { fromJS } from 'immutable';

const ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3000';

const headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
if (document.head.querySelector('meta[name="csrf-token"]')) {
  headers['X-CSRF-Token'] = document.head.querySelector('meta[name="csrf-token"]').content;
}

const axios = Axios.create({
  baseURL: ENDPOINT,
  responseType: 'json',
  headers,
});

const tokenAuth = (token) => `Bearer ${token}`;

const oauthOptions = ['linkedin', 'facebook', 'google', 'twitter'];
if (process.env.NODE_ENV !== 'production') {
  oauthOptions.push('developer');
}

const buildOauthOrigin = (returnTo) => {
  const endpoint = window.location.href.split('/').slice(0, 3).join('/');
  const returnToPath = returnTo || window.location.pathname;
  const origin = `${endpoint}/finish_signin?returnTo=${encodeURIComponent(returnToPath)}`;
  return encodeURIComponent(origin);
};

export const OAUTH = {
  providers: fromJS(oauthOptions),
  getUrl: (provider, returnTo) => `${ENDPOINT}/auth/${provider}?origin=${buildOauthOrigin(returnTo)}`,
};

export const signIn = (email, password) => axios.post('/v1/auth', { email, password }, { withCredentials: true });
export const finishSignIn = () => axios.post('/v1/auth', undefined, { withCredentials: true });
export const register = (user) => axios.post('/v1/user', { user }, { withCredentials: true });
export const resetPassword = (token, password) => axios.post('/v1/user/reset_password', { token, password });
export const confirmEmail = (token) => axios.post('/v1/user/confirm_email', { token });
export const forgotPassword = (email) => axios.post('/v1/user/forgot_password', { email });

export const updateCurrentUser = (token, user) => axios.patch('/v1/user', { user }, { headers: { Authorization: tokenAuth(token) } });

export const listWidgets = () => axios.get('/widgets');
export const updateWidget = (uid, props) => axios.patch(`/widgets/${uid}`, { widget: props });
