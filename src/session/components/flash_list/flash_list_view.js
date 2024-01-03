import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import Flash from '../flash';

/**
 * This React component simply displays a list of `<Flash>` elements
 */
const FlashListView = ({ list }) => (
  <Fragment>
    {list.map((entry) => (
      <Flash key={entry.id} flashId={entry.id} type={entry.type} msg={entry.msg} />
    ))}
  </Fragment>
);

FlashListView.propTypes = {
  /** immutable `List` of Flash models */
  list: PropTypes.instanceOf(List).isRequired,
};

export default FlashListView;
