import React from 'react';
import { fromJS } from 'immutable';
import FlashList from './index';
import FlashListView from './flash_list_view';
import { showFlash } from '../../actions';
import { getFlashList } from '../../../reducer';

export default {
  title: 'session/FlashList',
  component: FlashListView,
};

export const listsStuff = () => {
  if (getFlashList(global.store.getState()).size < 1) {
    global.store.dispatch(showFlash({ type: 'error', msg: 'pudding' }));
    global.store.dispatch(showFlash({ type: 'success', msg: 'cello' }));
    global.store.dispatch(showFlash({ type: 'warn', msg: 'squirrel' }));
  }

  return <FlashList />;
};

listsStuff.storyName = 'lists stuff';

export const emptyList = () => <FlashListView list={fromJS([])} />;

emptyList.storyName = 'empty list';
