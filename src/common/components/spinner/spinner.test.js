import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './spinner';

describe('<Spinner />', () => {
  let subject;
  beforeEach(() => {
    subject = shallow(<Spinner />);
  });

  it('renders correctly', () => {
    expect(subject).toMatchSnapshot();
  });
});
