import React from 'react';
import { shallow } from 'enzyme';
import LandingPageView from './landing_page_view';

describe('<LandingPageView />', () => {
  let subject;
  beforeEach(() => {
    subject = shallow(<LandingPageView />);
  });

  it('renders correctly', () => {
    expect(subject).toMatchSnapshot();
  });
});
