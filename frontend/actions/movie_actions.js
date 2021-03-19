import * as APIUtil from '../util/movies_api_util';
export const FETCH_MOVIE = "FETCH_MOVIE";

const fetchOneMovie = movie => {
  return {
    type: FETCH_MOVIE,
    movie
  }
}

export const fetchMovie = () => dispatch => {
  return APIUtil.fetchMovie().then(movie => (dispatch(fetchOneMovie(movie))), err => (console.log(err)));
}