import { Record, List, Map } from 'immutable';

const DEFAULT_ARGS = {
  currentUser: undefined,
  flashList: new List(),
  experiments: new Map(),
};

class SessionModel extends Record(DEFAULT_ARGS) {
  static _name = 'Session::SessionModel';
}

export default SessionModel;
