import * as APIUtil from '../util/genre_api_util';
export const RECEIVE_GENRE = "RECEIVE_GENRE";

const receiveGenres = genres => {
  return {
    type: RECEIVE_GENRE,
    genres
  }
}

export const fetchGenres = () => dispatch => {
  return APIUtil.fetchGenres().then(genres => {
    return dispatch(receiveGenres(genres))}, err => {return err.JSON});
}