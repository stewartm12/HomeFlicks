import {
  LOGIN_USER,
  LOGOUT_USER,
} from '../actions/session_actions';

const nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case LOGIN_USER:
      return { id: action.currentUser.id };
    case LOGOUT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
