import { List } from 'immutable';
import actions from '../actions';
import FlashModel from '../models/flash_model';

const DEFAULT_STATE = new List();

// This reducer is responsible for maintaining the list of displayed Flash messages
function FlashReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actions.SHOW_FLASH:
      return state.push(new FlashModel(action.flash));
    case actions.DISMISS_FLASH:
      // Remove all flash records with an id matching the action's flashId field
      return state.filterNot((flash) => flash.id === action.flashId);
    default:
      return state;
  }
}

export default FlashReducer;
