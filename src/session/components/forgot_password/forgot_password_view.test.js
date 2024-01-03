import React from 'react';
import { shallow } from 'enzyme/build';
import ForgotPasswordView from './forgot_password_view';

describe('<ForgotPasswordView />', () => {
  let subject;

  describe('not logged in', () => {
    beforeEach(() => {
      subject = shallow(<ForgotPasswordView signedIn={false} handleSubmit={jest.fn()} />);
    });

    it('renders correctly', () => {
      expect(subject).toMatchSnapshot();
    });
  });

  describe('when already logged in', () => {
    beforeEach(() => {
      subject = shallow(<ForgotPasswordView signedIn handleSubmit={jest.fn()} />);
    });

    it('renders correctly', () => {
      expect(subject).toMatchSnapshot();
    });
  });
});
