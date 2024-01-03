import React from 'react';
import ContactForm from './contact_form_view';

export default {
  title: 'hub_spot_form/ContactForm',
  component: ContactForm,
};

export const defaultStory = () => <ContactForm />;

defaultStory.storyName = 'default';
