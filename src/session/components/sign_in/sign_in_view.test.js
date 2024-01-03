import React from 'react';
import { shallow } from 'enzyme/build';
import SignInView from './sign_in_view';

const FOO_LOCATION = { state: { returnTo: '/foo/bar' } };
const NO_LOCATION = { state: {} };

describe('<SignInView />', () => {
  let subject;

  describe('not logged in', () => {
    describe('without error', () => {
      beforeEach(() => {
        subject = shallow(<SignInView signedIn={false} handleSubmit={jest.fn()} location={FOO_LOCATION} />);
      });

      it('renders correctly', () => {
        expect(subject).toMatchSnapshot();
      });
    });
    describe('without location set', () => {
      beforeEach(() => {
        subject = shallow(<SignInView signedIn={false} handleSubmit={jest.fn()} location={NO_LOCATION} />);
      });

      it('renders correctly', () => {
        expect(subject).toMatchSnapshot();
      });
    });
    describe('with error', () => {
      beforeEach(() => {
        subject = shallow(<SignInView signedIn={false} handleSubmit={jest.fn()} location={FOO_LOCATION} status="failed" />);
      });
      it('renders correctly', () => {
        expect(subject).toMatchSnapshot();
      });
    });
  });

  describe('when already logged in', () => {
    describe('with a returnTo location state set', () => {
      beforeEach(() => {
        subject = shallow(<SignInView signedIn handleSubmit={jest.fn()} location={FOO_LOCATION} status={undefined} />);
      });

      it('renders correctly', () => {
        expect(subject).toMatchSnapshot();
      });
    });
    describe('without a returnTo location state set', () => {
      beforeEach(() => {
        subject = shallow(<SignInView signedIn handleSubmit={jest.fn()} location={NO_LOCATION} status={undefined} />);
      });

      it('renders correctly', () => {
        expect(subject).toMatchSnapshot();
      });
    });
  });
});
