import React from 'react';
import { action } from '@storybook/addon-actions';
import SignOutView from './sign_out_view';

export default {
  title: 'session/SignOutView',
  component: SignOutView,
};

export const whenSignedIn = () => <SignOutView signedIn signOut={action('SignOut')} />;

whenSignedIn.storyName = 'when signed in';

whenSignedIn.parameters = {
  notes: 'Automatic sign out via useEvent and spinner until signed out',
};

export const whenSignedOut = () => <p>AutoRedirects do not work with Storybook</p>;

whenSignedOut.storyName = 'when signed out';

whenSignedOut.parameters = {
  notes: 'Once signed out, auto-redirect to /',
};
