import { Record } from 'immutable';

const DEFAULT_STATE = {
  id: undefined,
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  authToken: undefined,
};

class UserModel extends Record(DEFAULT_STATE) {
  static _name = 'Session::UserModel';

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }

  get signedIn() {
    return !!this.authToken;
  }
}

export default UserModel;
