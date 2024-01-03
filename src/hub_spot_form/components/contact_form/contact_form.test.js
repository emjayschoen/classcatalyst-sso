import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

// eslint-disable-next-line import/first
import ContactFormView from './contact_form_view';

describe('<ContactFormView />', () => {
  let subject;
  beforeEach(() => {
    subject = shallow(<ContactFormView />);
  });

  it('renders correctly', () => {
    expect(subject).toMatchSnapshot();
  });
});
