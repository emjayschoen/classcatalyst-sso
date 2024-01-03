import React from 'react';
import { action } from '@storybook/addon-actions';
import { Util } from '@protastudios/prota-core-react';
import { reduxForm } from '../../../common/form';
import ResetPasswordView from './reset_password_view';
import ResetPasswordForm from './reset_password_form';

const { sleep } = Util;

export default {
  title: 'session/ResetPasswordView',
  component: ResetPasswordView,
};

export const normal = () => {
  const WrappedView = reduxForm({ form: 'signin', onSubmit: action('FormSubmit') })(ResetPasswordView);
  return <WrappedView signedIn={false} location={{ state: {} }} />;
};

normal.parameters = {
  notes: 'this is a great component...',
};

export const failedRequestBadToken = () => {
  const diediedie = (args) => {
    action('FormSubmit (about to fail)')(args);
    throw new Error('pudding');
  };
  const WrappedView = reduxForm({ form: 'signin', onSubmit: diediedie })(ResetPasswordView);
  return <WrappedView signedIn={false} location={{ state: {} }} />;
};

failedRequestBadToken.storyName = 'failed request (bad token)';

failedRequestBadToken.parameters = {
  notes: 'If onSubmit fails, we should get an error message',
};

export const slowSubmit = () => {
  const slowAction = async (args) => {
    action('FormSubmit (sleeping)')(args);
    await sleep(2000);
  };
  const WrappedView = reduxForm({ form: 'signin', onSubmit: slowAction })(ResetPasswordView);
  return <WrappedView signedIn={false} location={{ state: {} }} />;
};

slowSubmit.storyName = 'slow submit';

slowSubmit.parameters = {
  notes: 'If onSubmit fails, we should get an error message',
};

export const withValidation = () => <ResetPasswordForm onSubmit={action('FormSubmit')} signedIn={false} location={{ state: {} }} />;

withValidation.storyName = 'with validation';
