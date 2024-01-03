import actions from '../actions';
import UserModel from '../models/user_model';

const DEFAULT_STATE = new UserModel();

// This reducer is responsible for tracking the identity of the user
function UserReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actions.RECOGNIZE_USER:
      return new UserModel(action.user);
    case actions.SIGN_IN.success:
    case actions.FINISH_SIGN_IN.success:
    case actions.REGISTER.success:
    case actions.UPDATE_CURRENT_USER.success:
      return new UserModel(action.response.data);
    case actions.SIGN_OUT:
      return DEFAULT_STATE;
    default:
      return state;
  }
}

export default UserReducer;
