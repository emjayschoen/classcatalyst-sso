import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import LandingPage from '.';
import configureStore from '../store';

describe('<LandingPage />', () => {
  let subject;
  beforeEach(() => {
    const { store } = configureStore();
    subject = mount(
      <Provider store={store}>
        <LandingPage />
      </Provider>,
    );
  });

  it('renders correctly', () => {
    // expect(subject).toMatchSnapshot();
    // Enable to directly render to json due to bug in enzyme-to-json
    expect(subject.debug()).toMatchSnapshot();
  });
});
