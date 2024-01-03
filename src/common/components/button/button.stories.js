import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './button';

export default {
  title: 'common/Button',
  component: Button,
  argTypes: {
    buttonType: {
      control: {
        type: 'select',
        options: [undefined, 'primary', 'secondary', 'text'],
      },
      default: undefined,
    },
  },
  args: {
    buttonType: undefined,
    onClick: action('DynClick'),
    children: 'Clicktastic! 🏆',
  },
};

// eslint-disable-next-line react/prop-types
const Template = ({ children, ...args }) => <Button {...args}>{children}</Button>;

export const primary = Template.bind({});
primary.args = {
  buttonType: 'primary',
};

export const secondary = Template.bind({});
secondary.args = {
  buttonType: 'secondary',
};

export const text = Template.bind({});
text.args = {
  buttonType: 'text',
};
