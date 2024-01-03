import { connect } from 'react-redux';
import ExampleWidgetView from './example_widget_view';

function mapStateToProps(state) {
  return {
    hash: state.getIn(['router', 'location', 'hash']),
  };
}

const ExampleWidgetContainer = connect(mapStateToProps)(ExampleWidgetView);

/** @component */
export default ExampleWidgetContainer;
