import { Record } from 'immutable';

const DEFAULT_ARGS = {
  type: 'error',
  msg: undefined,
  ts: undefined,
};

class FlashModel extends Record(DEFAULT_ARGS) {
  static _name = 'Session::FlashModel';

  constructor(args) {
    // Override the default constructor to inject a timestamp
    super({ ts: Date.now(), ...args });
  }

  get id() {
    // Use hashCode (provided by Record) as our unique key for React.
    return this.hashCode();
  }
}

export default FlashModel;
