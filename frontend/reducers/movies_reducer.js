import {
  FETCH_MOVIE
} from '../actions/movie_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_MOVIE:
      return Object.assign({}, action.movie)
    default:
      return state;
  }
};

