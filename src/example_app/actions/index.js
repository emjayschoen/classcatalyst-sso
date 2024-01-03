import { Util } from '@protastudios/prota-core-react';
import * as api from '../../api';

const { genericAPIActionTypes, genericAPIActionCreator } = Util;

const ACTIONS = {
  LIST_WIDGETS: genericAPIActionTypes('ExampleApp:ListWidgets'),
};

export const listWidgets = genericAPIActionCreator(api.listWidgets, ACTIONS.LIST_WIDGETS, 'Unable to list widgets');

export default ACTIONS;
