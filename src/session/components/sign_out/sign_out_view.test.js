import React from 'react';
import { shallow } from 'enzyme/build';
import SignOutView from './sign_out_view';

describe('<SignOutView />', () => {
  let subject;

  describe('when signed in', () => {
    beforeEach(() => {
      subject = shallow(<SignOutView signedIn signOut={jest.fn()} />);
    });

    it('renders correctly', () => {
      expect(subject).toMatchSnapshot();
    });
  });
  describe('when signed out', () => {
    beforeEach(() => {
      subject = shallow(<SignOutView signedIn={false} signOut={jest.fn()} />);
    });

    it('renders correctly', () => {
      expect(subject).toMatchSnapshot();
    });
  });
});
