import { combineReducers } from 'redux';
import genres from './genre_reducer'
import users from './users_reducer';
import movies from './movies_reducer';

export default combineReducers({
  genres,
  movies,
  users
});
