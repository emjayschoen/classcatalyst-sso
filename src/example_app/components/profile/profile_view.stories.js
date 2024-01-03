import React from 'react';
import { action } from '@storybook/addon-actions';
import ProfileView from './profile_view';

export default {
  title: 'example_app/ProfileView',
  component: ProfileView,
};

export const normal = () => (
  <ProfileView>
    <span role="img" aria-label="pizza">
      🍕
    </span>
  </ProfileView>
);

normal.parameters = {
  notes: 'this is a great component...',
};

export const dynamic = ({ content, ...args }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ProfileView {...args}>{content}</ProfileView>
);
dynamic.args = {
  propB: true,
  onClick: action('ProfileClick'),
  content: 'Something cool belongs here 🍨',
};
dynamic.storyName = 'Dynamic';
