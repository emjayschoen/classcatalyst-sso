import React from 'react';
import {className}View from './{snakeName}_view';

describe('<{className}View />', () => {
  let subject;
  beforeEach(() => {
    subject = shallow(<{className}View />);
  });

  it('renders correctly', () => {
    expect(subject).toMatchSnapshot();
  });
});
