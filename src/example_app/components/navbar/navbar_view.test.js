import React from 'react';
import { shallow } from 'enzyme';
import NavbarView from './navbar_view';

describe('<NavbarView />', () => {
  let subject;

  describe('signed in', () => {
    beforeEach(() => {
      subject = shallow(<NavbarView signedIn />);
    });

    it('renders correctly', () => {
      expect(subject).toMatchSnapshot();
    });
  });

  describe('signed out', () => {
    beforeEach(() => {
      subject = shallow(<NavbarView signedIn={false} />);
    });

    it('renders correctly', () => {
      expect(subject).toMatchSnapshot();
    });
  });
});
