import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('<Button />', () => {
  let subject;
  beforeEach(() => {
    subject = shallow(<Button />);
  });

  it('renders correctly', () => {
    expect(subject).toMatchSnapshot();
  });

  describe('primary', () => {
    beforeEach(() => {
      subject = shallow(<Button primary />);
    });

    it('renders correctly', () => {
      expect(subject).toMatchSnapshot();
    });
  });

  describe('disabled', () => {
    beforeEach(() => {
      subject = shallow(<Button disabled />);
    });

    it('renders correctly', () => {
      expect(subject).toMatchSnapshot();
    });
  });
});
