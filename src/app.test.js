import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import App, { store } from './app';
import { setTreatment } from './session/actions';

const buildCleanSnapshot = (mountedComponent) => {
  const debug = mountedComponent.debug();
  // Redact class names added by styled-components (eg, 'sc-ifAKCX nDjtL' or 'sc-gqjmRU jmMDSQ')
  return debug.replace(/ className="[a-z]{2}-[a-z]{4,6} [a-z]{4,6}"/gi, ' className="-redacted-"');
};

describe('<App />', () => {
  describe('default flags', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
      expect(div).toMatchSnapshot();
    });
    it('renders correctly', () => {
      const subject = shallow(<App />);
      expect(subject).toMatchSnapshot();
    });
    it('mounts correctly', () => {
      const subject = mount(<App />);
      expect(buildCleanSnapshot(subject)).toMatchSnapshot();
    });
  });
  describe('with showApp set', () => {
    beforeEach(() => {
      store.dispatch(setTreatment('showApp', 'foSho'));
    });
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
      expect(div).toMatchSnapshot();
    });
    it('renders correctly', () => {
      const subject = shallow(<App />);
      expect(subject).toMatchSnapshot();
    });
    it('mounts correctly', () => {
      const subject = mount(<App />);
      expect(buildCleanSnapshot(subject)).toMatchSnapshot();
    });
  });
  describe('with showApp unset', () => {
    beforeEach(() => {
      store.dispatch(setTreatment('showApp', ''));
    });
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
      expect(div).toMatchSnapshot();
    });
    it('renders correctly', () => {
      const subject = shallow(<App />);
      expect(subject).toMatchSnapshot();
    });
    it('mounts correctly', () => {
      const subject = mount(<App />);
      expect(buildCleanSnapshot(subject)).toMatchSnapshot();
    });
  });
});
