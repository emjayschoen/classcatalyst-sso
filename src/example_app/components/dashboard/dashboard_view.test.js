import React from 'react';
import { shallow } from 'enzyme';
import DashboardView from './dashboard_view';

describe('<DashboardView />', () => {
  let subject;
  beforeEach(() => {
    subject = shallow(<DashboardView />);
  });

  it('renders correctly', () => {
    expect(subject).toMatchSnapshot();
  });
});
