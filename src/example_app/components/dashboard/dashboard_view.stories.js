import React from 'react';
import DashboardView from './dashboard_view';

export default {
  title: 'example_app/DashboardView',
  component: DashboardView,
};

export const normal = () => <DashboardView />;

normal.parameters = {
  notes: 'this is a great component...',
};
