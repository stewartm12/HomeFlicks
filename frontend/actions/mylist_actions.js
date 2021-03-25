import * as APIUtil from '../util/mylist_api_util';
export const RECEIVE_MY_MOVIE_LIST = "RECEIVE_MY_MOVIE_LIST";

const myMovieList = user => {
  return {
    type: RECEIVE_MY_MOVIE_LIST,
    user
  }
}

export const saveMovie = (userId, movieId) => dispatch => {
  return APIUtil.saveMovie(userId, movieId).then(user => {
    return dispatch(myMovieList(user))}, err => {err.JSON});
}

export const deleteMovie = (userId, movieId) => dispatch => {
  return APIUtil.deleteMovie(userId, movieId).then(user => {
    return dispatch(myMovieList(user))}, err => {err.JSON});
}