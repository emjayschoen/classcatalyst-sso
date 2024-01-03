import React from 'react';
import ExampleWidget from './index';
import ExampleWidgetView from './example_widget_view';

export default {
  title: 'example_app/ExampleWidget',
  component: ExampleWidget,
};

export const container = () => <ExampleWidget />;
// eslint-disable-next-line react/prop-types
export const view = ({ hash }) => <ExampleWidgetView hash={hash} />;
view.args = { hash: 'a9d9d9e9a9c9' };
