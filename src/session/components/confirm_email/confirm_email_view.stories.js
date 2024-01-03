import React from 'react';
import { action } from '@storybook/addon-actions';
import { Util } from '@protastudios/prota-core-react';
import ConfirmEmailView from './confirm_email_view';

const { sleep } = Util;

export default {
  title: 'session/ConfirmEmailView',
  component: ConfirmEmailView,
};

export const normal = () => <ConfirmEmailView confirmEmail={action('confirmEmail')} location={{ state: {} }} />;

export const failedRequestBadToken = () => {
  const broken = (args) => {
    action('confirmEmail (about to fail)')(args);
    throw new Error('pudding');
  };
  return <ConfirmEmailView confirmEmail={broken} location={{ state: {} }} />;
};

failedRequestBadToken.storyName = 'failed request (bad token)';

failedRequestBadToken.parameters = {
  notes: 'If onSubmit fails, we should get an error message',
};

export const slowSubmit = () => {
  const slowAction = async (args) => {
    action('confirmEmail (sleeping)')(args);
    await sleep(2000);
    action('confirmEmail (finished)')(args);
  };
  return <ConfirmEmailView confirmEmail={slowAction} location={{ state: {} }} />;
};

slowSubmit.storyName = 'slow submit';

slowSubmit.parameters = {
  notes: 'If onSubmit fails, we should get an error message',
};
