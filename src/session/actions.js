// List of session-related actions.  All scoped with 'SESSION:'
import { Util } from '@protastudios/prota-core-react';
import * as API from '../api';

const { genericAPIActionCreator, genericAPIActionTypes } = Util;

const ACTIONS = {
  RECOGNIZE_USER: 'SESSION:RECOGNIZE_USER',
  SHOW_FLASH: 'SESSION:SHOW_FLASH',
  DISMISS_FLASH: 'SESSION:DISMISS_FLASH',
  SET_EXPERIMENT: 'SESSION:EXPERIMENT',
  SIGN_IN: genericAPIActionTypes('Session:SignIn'),
  SIGN_OUT: 'SESSION:SIGN_OUT',
  FINISH_SIGN_IN: genericAPIActionTypes('Session:FinishSignIn'),
  REGISTER: genericAPIActionTypes('Session:Register'),
  CONFIRM_EMAIL: genericAPIActionTypes('Session:ConfirmEmail'),
  FORGOT_PASSWORD: genericAPIActionTypes('Session:ForgotPassword'),
  RESET_PASSWORD: genericAPIActionTypes('Session:ResetPassword'),
  UPDATE_CURRENT_USER: genericAPIActionTypes('Session:UpdateUser'),
};

// Set the current user
export const recognizeUser = (user) => ({
  type: ACTIONS.RECOGNIZE_USER,
  user,
});

export const signIn = (email, password) => genericAPIActionCreator(() => API.signIn(email, password), ACTIONS.SIGN_IN, undefined, { email });
export const finishSignIn = () => genericAPIActionCreator(API.finishSignIn, ACTIONS.FINISH_SIGN_IN, 'Failed to finish signing in');

export const register = (info) => genericAPIActionCreator(() => API.register(info), ACTIONS.REGISTER, undefined, { email: info.email });
export const confirmEmail = (token) => genericAPIActionCreator(() => API.confirmEmail(token), ACTIONS.CONFIRM_EMAIL, undefined, { token });

export const forgotPassword = (email) => genericAPIActionCreator(() => API.forgotPassword(email), ACTIONS.FORGOT_PASSWORD, undefined, { email });
export const resetPassword = (token, password) =>
  genericAPIActionCreator(() => API.resetPassword(token, password), ACTIONS.RESET_PASSWORD, undefined, { token });

export const updateCurrentUser = (token, props) =>
  genericAPIActionCreator(() => API.updateCurrentUser(token, props), ACTIONS.UPDATE_CURRENT_USER, undefined, { props });

export const signOut = () => ({
  type: ACTIONS.SIGN_OUT,
});

// Display a new flash message
export const showFlash = (flash) => ({
  type: ACTIONS.SHOW_FLASH,
  flash,
});

// Dismiss a flash message by id
export const dismissFlash = (flashId) => ({
  type: ACTIONS.DISMISS_FLASH,
  flashId,
});

export const setTreatment = (key, treatment) => ({
  type: ACTIONS.SET_EXPERIMENT,
  key,
  treatment,
});

export default ACTIONS;
