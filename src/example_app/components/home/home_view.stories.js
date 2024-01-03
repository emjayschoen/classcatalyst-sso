import React from 'react';
import HomeView from './home_view';

export default {
  title: 'example_app/HomeView',
  component: HomeView,
};

export const normal = () => <HomeView />;

normal.parameters = {
  notes: 'this is a great component...',
};
