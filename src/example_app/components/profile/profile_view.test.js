import React from 'react';
import { shallow } from 'enzyme';
import ProfileView from './profile_view';

describe('<ProfileView />', () => {
  let subject;
  beforeEach(() => {
    subject = shallow(<ProfileView handleSubmit={jest.fn()} />);
  });

  it('renders correctly', () => {
    expect(subject).toMatchSnapshot();
  });
});
