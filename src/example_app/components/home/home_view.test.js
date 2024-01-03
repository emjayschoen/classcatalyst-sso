import React from 'react';
import { shallow } from 'enzyme';
import HomeView from './home_view';

describe('<HomeView />', () => {
  let subject;
  beforeEach(() => {
    subject = shallow(<HomeView />);
  });

  it('renders correctly', () => {
    expect(subject).toMatchSnapshot();
  });
});
