import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ExampleFeature from './index';
import { setTreatment } from '../../../session/actions';

export default {
  title: 'example_app/ExampleFeature',
  component: ExampleFeature,
};

export const withoutFlag = () => {
  global.store.dispatch(setTreatment('featureA', ''));
  return <ExampleFeature />;
};

withoutFlag.storyName = 'Without Flag';

export const withFlag = () => {
  global.store.dispatch(setTreatment('featureA', 'huzzah'));
  return <ExampleFeature />;
};

withFlag.storyName = 'WithFlag';

export const toggle = () => {
  const ToggleButton = connect(undefined, { set: setTreatment })(({ name, val, set }) => (
    <button type="button" onClick={() => set(name, val)}>{`Set '${name}' to '${val}'`}</button>
  ));

  return (
    <Fragment>
      <ExampleFeature />
      <hr />
      <ToggleButton name="featureA" val="woot!" />
      &nbsp;
      <ToggleButton name="featureA" val="" />
    </Fragment>
  );
};
