import { connect } from 'react-redux';
import { getFlashList } from '../../../reducer';
import FlashListView from './flash_list_view';

// Simply pull the list of flash messages from Redux
const mapStateToProps = (state) => ({ list: getFlashList(state) });

// All we need is one prop from redux state, so this is a very simple call.
const FlashListContainer = connect(mapStateToProps)(FlashListView);

export default FlashListContainer;
