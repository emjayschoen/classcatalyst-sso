import React from 'react';
import { action } from '@storybook/addon-actions';
import FinishSignInView from './finish_sign_in_view';

export default {
  title: 'session/FinishSignInView',
  component: FinishSignInView,
};

export const normal = () => <FinishSignInView signedIn={false} finishSignIn={async () => action('FinishSignIn')()} location={{ search: {} }} />;

normal.parameters = {
  notes: 'we just show a spinner and attempt to fetch auth in background',
};

export const signedIn = () => <p>Redirects and Storybook do not mix...</p>;

signedIn.storyName = 'signed in';
