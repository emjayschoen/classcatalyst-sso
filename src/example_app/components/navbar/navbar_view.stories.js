import React from 'react';
import NavbarView from './navbar_view';

export default {
  title: 'example_app/NavbarView',
  component: NavbarView,
};

export const signedOut = () => <NavbarView signedIn={false} />;

signedOut.storyName = 'signed out';

export const signedIn = () => <NavbarView signedIn />;

signedIn.storyName = 'signed in';

// eslint-disable-next-line react/jsx-props-no-spreading
export const dynamic = (args) => <NavbarView {...args} />;

dynamic.storyName = 'Dynamic';
dynamic.args = { signedIn: true };
