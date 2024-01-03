import React from 'react';
import { shallow } from 'enzyme/build';
import ConfirmEmailView from './confirm_email_view';

describe('<ConfirmEmailView />', () => {
  let subject;

  beforeEach(() => {
    subject = shallow(<ConfirmEmailView confirmEmail={jest.fn()} />);
  });

  it('renders correctly', () => {
    expect(subject).toMatchSnapshot();
  });
});
