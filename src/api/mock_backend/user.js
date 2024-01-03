import { fromJS, Map } from 'immutable';
import { Util } from '@protastudios/prota-core-react';
import MOCK_USERS from './mocks/users';

const { mockAPI } = Util;

let registeredUsers = new Map(fromJS(MOCK_USERS).map((user) => [user.get('email'), user]));
let authTokens = registeredUsers.mapKeys((email, user) => user.get('authToken'));

export const signIn = mockAPI(async (email, password) => {
  const found = registeredUsers.get(email);
  if (found && found.get('password') === password) {
    return found;
  }
  return {
    mock_error: `Invalid authentication (${email}:${password})`,
  };
});

export const OAUTH = {
  providers: fromJS(['linkedin', 'facebook', 'google', 'twitter']),
  getUrl: (provider, returnTo) => `/mockauth/${provider}/${encodeURIComponent(returnTo)}`,
  pendingOauth: false,
};

export const finishSignIn = mockAPI(async () => {
  if (OAUTH.pendingOauth) {
    OAUTH.pendingOauth = false; // Single-use!
    return registeredUsers.get('jackson@test.com');
  }
  throw new Error('no auth cookies for you!');
});

export const register = mockAPI((info) => {
  if (!info.email) {
    return {
      mock_error: 'Missing email',
    };
  }
  if (!info.password) {
    return {
      mock_error: 'Missing password',
    };
  }
  const existing = registeredUsers.get(info.email);
  if (existing) {
    if (existing.get('password') === info.password) {
      return existing;
    }
    return {
      mock_error: 'A user with that email already exists',
    };
  }
  if (info.email.toString().endsWith('@test.com')) {
    const [firstName, ...restName] = info.name.split(' ');
    const lastName = restName.join(' ');
    const newUser = fromJS({ firstName, lastName, authToken: 'newToken', ...info });

    registeredUsers = registeredUsers.set(info.email, newUser);
    return newUser;
  }
  return {
    mock_error: 'Invalid email address',
  };
});

const emailTokens = {
  shorty5: registeredUsers.get('stu@test.com'),
};

export const confirmEmail = mockAPI((token) => {
  const user = emailTokens[token];
  if (user) {
    return {};
  }
  return { mock_error: 'Unauthorized' };
});

const generateFakeToken = () => `${Math.random().toString(36).substring(2)}-${new Date().getTime().toString(36)}`;

const resetTokens = {
  lucky42: registeredUsers.get('stu@test.com'),
};

export const forgotPassword = mockAPI((email) => {
  const user = registeredUsers.get(email);
  if (user) {
    const token = generateFakeToken();
    // Log to console, since we expect to deliver token out-of-band (email) in real API
    console.log(`Password reset token is '${token}'`); // eslint-disable-line no-console
    resetTokens[token] = user;
    return {};
  }
  return { mock_error: 'Unauthorized' };
});

export const resetPassword = mockAPI((token, password) => {
  const user = resetTokens[token];
  if (user) {
    delete resetTokens[token];
    registeredUsers = registeredUsers.update(user.get('email'), (u) => u.set('password', password));
    return {};
  }
  return { mock_error: 'Unauthorized' };
});

export const updateCurrentUser = mockAPI((token, props) => {
  const user = authTokens.get(token);
  if (user) {
    const updatedUser = user.merge(props);
    authTokens = authTokens.set(token, updatedUser);
    registeredUsers = registeredUsers.set(updatedUser.email, updatedUser);
    return updatedUser.toJS();
  }
  return user;
});
