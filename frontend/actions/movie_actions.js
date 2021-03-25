import {getMovie} from '../util/movies_api_util';
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";

const receiveMovie = movie => {
  return {
    type: RECEIVE_MOVIE,
    movie
  }
}

export const fetchMovie = movieId => dispatch => {
  return getMovie(movieId).then(movie => {
    return dispatch(receiveMovie(movie))}, err => {err.JSON});
}