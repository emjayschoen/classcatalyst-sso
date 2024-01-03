import React from 'react';
import { shallow } from 'enzyme';
import MockAuthView from './mock_auth_view';

describe('<MockAuthView />', () => {
  let subject;
  beforeEach(() => {
    subject = shallow(<MockAuthView match={{ params: { provider: 'sid', returnTo: encodeURIComponent('/fun/and/profit') } }} />);
  });

  it('renders correctly', () => {
    expect(subject).toMatchSnapshot();
  });
});
