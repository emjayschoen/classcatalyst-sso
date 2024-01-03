import React from 'react';
import { shallow } from 'enzyme';
import FooterView from './footer_view';

describe('<FooterView />', () => {
  let subject;
  beforeEach(() => {
    subject = shallow(<FooterView />);
  });

  it('renders correctly', () => {
    expect(subject).toMatchSnapshot();
  });
});
