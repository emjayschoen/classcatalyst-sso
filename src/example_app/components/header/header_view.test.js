import React from 'react';
import { shallow } from 'enzyme';
import HeaderView from './header_view';

describe('<HeaderView />', () => {
  let subject;

  describe('signed in', () => {
    beforeEach(() => {
      subject = shallow(<HeaderView signedIn />);
    });

    it('renders correctly', () => {
      expect(subject).toMatchSnapshot();
    });
  });
  describe('signed out', () => {
    beforeEach(() => {
      subject = shallow(<HeaderView signedIn={false} />);
    });

    it('renders correctly', () => {
      expect(subject).toMatchSnapshot();
    });
  });
});
