import React from 'react';
import PropTypes from 'prop-types';

/**
 * Simple widget that renders some text
 */
function ExampleWidgetView({ hash }) {
  return <span>{`ExampleReactWidget -- CHANGEME_HOMEPAGE_REACT_TEXT (location hash: '${hash}')`}</span>;
}
ExampleWidgetView.propTypes = {
  hash: PropTypes.string.isRequired,
};

/** @component */
export default ExampleWidgetView;
