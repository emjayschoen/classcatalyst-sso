import React from 'react';
import FooterView from './footer_view';

export default {
  title: 'example_app/FooterView',
  component: FooterView,
};

export const normal = () => <FooterView />;

normal.parameters = {
  notes: 'this is a great component...',
};
