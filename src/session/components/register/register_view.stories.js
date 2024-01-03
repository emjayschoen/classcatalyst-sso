import React from 'react';
import { action } from '@storybook/addon-actions';
import { Util } from '@protastudios/prota-core-react';
import { reduxForm } from '../../../common/form';
import RegisterView from './register_view';
import RegisterForm from './register_form';

const { sleep } = Util;

export default {
  title: 'session/RegisterView',
  component: RegisterView,
};

export const normal = () => {
  const WrappedView = reduxForm({ form: 'signin', onSubmit: action('FormSubmit') })(RegisterView);
  return <WrappedView signedIn={false} location={{ state: {} }} />;
};

normal.parameters = {
  notes: 'this is a great component...',
};

export const withReturnToState = () => {
  const WrappedView = reduxForm({ form: 'signin', onSubmit: action('FormSubmit') })(RegisterView);
  return <WrappedView signedIn={false} location={{ state: { returnTo: '/foo/bar' } }} />;
};

withReturnToState.storyName = 'with returnTo state';

withReturnToState.parameters = {
  notes: 'Notice the difference in the social login links',
};

export const failedCredentials = () => {
  const diediedie = (args) => {
    action('FormSubmit (about to fail)')(args);
    throw new Error('pudding');
  };
  const WrappedView = reduxForm({ form: 'signin', onSubmit: diediedie })(RegisterView);
  return <WrappedView signedIn={false} location={{ state: {} }} />;
};

failedCredentials.storyName = 'failed credentials';

failedCredentials.parameters = {
  notes: 'If onSubmit fails, we should get an error message',
};

export const slowSignIn = () => {
  const slowAction = async (args) => {
    action('FormSubmit (sleeping)')(args);
    await sleep(2000);
  };
  const WrappedView = reduxForm({ form: 'signin', onSubmit: slowAction })(RegisterView);
  return <WrappedView signedIn={false} location={{ state: {} }} />;
};

slowSignIn.storyName = 'slow sign-in';

slowSignIn.parameters = {
  notes: 'If onSubmit fails, we should get an error message',
};

export const withValidation = () => <RegisterForm onSubmit={action('FormSubmit')} signedIn={false} location={{ state: {} }} />;

withValidation.storyName = 'with validation';
