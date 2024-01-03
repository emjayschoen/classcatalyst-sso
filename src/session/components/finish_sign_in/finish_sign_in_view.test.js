import React from 'react';
import { shallow } from 'enzyme';
import FinishSignInView from './finish_sign_in_view';

const NO_SEARCH = {};
const LEGIT_SEARCH = { search: `?fork=spoon&returnTo=${encodeURIComponent('/foo/bar')}&nothing=something` };
const DUMB_SEARCH = { search: '?why=does&this=confusion' };

describe('<FinishSignInView />', () => {
  let subject;

  describe('when not signed in', () => {
    describe('without search params', () => {
      beforeEach(() => {
        subject = shallow(<FinishSignInView location={NO_SEARCH} signedIn={false} finishSignIn={jest.fn()} />);
      });

      it('renders correctly', () => {
        expect(subject).toMatchSnapshot();
      });
    });
    describe('with meaningless search params', () => {
      beforeEach(() => {
        subject = shallow(<FinishSignInView location={DUMB_SEARCH} signedIn={false} finishSignIn={jest.fn()} />);
      });

      it('renders correctly', () => {
        expect(subject).toMatchSnapshot();
      });
    });
    describe('with returnTo search params', () => {
      beforeEach(() => {
        subject = shallow(<FinishSignInView location={LEGIT_SEARCH} signedIn={false} finishSignIn={jest.fn()} />);
      });

      it('renders correctly', () => {
        expect(subject).toMatchSnapshot();
      });
    });
  });

  describe('when signed in', () => {
    describe('without search params', () => {
      beforeEach(() => {
        subject = shallow(<FinishSignInView location={NO_SEARCH} signedIn finishSignIn={jest.fn()} />);
      });

      it('renders correctly', () => {
        expect(subject).toMatchSnapshot();
      });
    });
    describe('with meaningless search params', () => {
      beforeEach(() => {
        subject = shallow(<FinishSignInView location={DUMB_SEARCH} signedIn finishSignIn={jest.fn()} />);
      });

      it('renders correctly', () => {
        expect(subject).toMatchSnapshot();
      });
    });
    describe('with returnTo search params', () => {
      beforeEach(() => {
        subject = shallow(<FinishSignInView location={LEGIT_SEARCH} signedIn finishSignIn={jest.fn()} />);
      });

      it('renders correctly', () => {
        expect(subject).toMatchSnapshot();
      });
    });
  });
});
