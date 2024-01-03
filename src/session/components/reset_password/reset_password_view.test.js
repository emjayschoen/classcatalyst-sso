import React from 'react';
import { shallow } from 'enzyme/build';
import ResetPasswordView from './reset_password_view';

describe('<ResetPasswordView />', () => {
  let subject;

  describe('not logged in', () => {
    beforeEach(() => {
      subject = shallow(<ResetPasswordView signedIn={false} handleSubmit={jest.fn()} />);
    });

    it('renders correctly', () => {
      expect(subject).toMatchSnapshot();
    });
  });

  describe('when already logged in', () => {
    beforeEach(() => {
      subject = shallow(<ResetPasswordView signedIn handleSubmit={jest.fn()} />);
    });

    it('redirects to /', () => {
      expect(subject).toMatchSnapshot();
    });
  });
});
