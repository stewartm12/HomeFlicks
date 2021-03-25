import { LOGIN_USER } from '../actions/session_actions';
import {RECEIVE_MY_MOVIE_LIST} from '../actions/mylist_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_MY_MOVIE_LIST:
      let nextState = Object.assign({}, state);
      nextState[action.user.id] = action.user
      return nextState
    default:
      return state;
  }
};

export default usersReducer;
