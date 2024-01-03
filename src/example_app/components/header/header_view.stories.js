import React from 'react';
import HeaderView from './header_view';

export default {
  title: 'example_app/HeaderView',
  component: HeaderView,
};

export const normal = () => <HeaderView signedIn={false} />;

normal.parameters = {
  notes: 'this is a great component...',
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const dynamic = (args) => <HeaderView {...args} />;

dynamic.storyName = 'Dynamic';
dynamic.args = { signedIn: true };
