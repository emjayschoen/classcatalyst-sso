import React from 'react';
import { action } from '@storybook/addon-actions';
import { Util } from '@protastudios/prota-core-react';
import { reduxForm } from '../../../common/form';
import ForgotPasswordView from './forgot_password_view';
import ForgotPasswordForm from './forgot_password_form';

const { sleep } = Util;

export default {
  title: 'session/ForgotPasswordView',
  component: ForgotPasswordView,
};

export const simple = () => {
  const WrappedView = reduxForm({ form: 'signin', onSubmit: action('FormSubmit') })(ForgotPasswordView);
  return <WrappedView signedIn={false} location={{ state: {} }} />;
};

simple.parameters = {
  notes: 'this is a great component...',
};

export const failedApiCall = () => {
  const diediedie = (args) => {
    action('FormSubmit (about to fail)')(args);
    throw new Error('pudding');
  };
  const WrappedView = reduxForm({ form: 'signin', onSubmit: diediedie })(ForgotPasswordView);
  return <WrappedView signedIn={false} location={{ state: {} }} />;
};

failedApiCall.storyName = 'failed api call';

failedApiCall.parameters = {
  notes: 'If onSubmit fails, we should get an error message',
};

export const slowSubmit = () => {
  const slowAction = async (args) => {
    action('FormSubmit (sleeping)')(args);
    await sleep(2000);
  };
  const WrappedView = reduxForm({ form: 'signin', onSubmit: slowAction })(ForgotPasswordView);
  return <WrappedView signedIn={false} location={{ state: {} }} />;
};

slowSubmit.storyName = 'slow submit';

slowSubmit.parameters = {
  notes: 'If onSubmit fails, we should get an error message',
};

export const withValidation = () => <ForgotPasswordForm onSubmit={action('FormSubmit')} signedIn={false} location={{ state: {} }} />;

withValidation.storyName = 'with validation';
