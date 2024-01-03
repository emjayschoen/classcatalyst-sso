import React from 'react';
import Flash from './flash_view';

export default {
  title: 'session/Flash',
  component: Flash,
};

export const defaultStory = (args) => <Flash {...args} />;

defaultStory.args = {
  type: 'error',
  msg: 'Whoa!',
};
defaultStory.storyName = 'default';

export const error = () => <Flash msg="panic!" type="error" />;
