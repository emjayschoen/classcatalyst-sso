import React from 'react';
import { action } from '@storybook/addon-actions';
import {className}View from './{snakeName}_view';

export default {
  title: '{className}View',
  component: {className}View,
};

export const normal = () => (
  <{className}View>
    <span role="img" aria-label="pizza">
      🍕
    </span>
  </{className}View>
);

export const dynamic = ({content, ...args}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <{className}View {...args} >
    {content}
  </{className}View>
);
dynamic.args = {
  propB: true,
  onClick: action('{className}Click'),
  content: 'Something cool belongs here 🍨',
}
dynamic.storyName = 'Dynamic';
