import { Record } from 'immutable';

const DEFAULT_ARGS = {
  name: 'New Widget',
  cogs: 4,
};

class WidgetModel extends Record(DEFAULT_ARGS) {
  static _name = 'Example::Widget';
}

export default WidgetModel;
