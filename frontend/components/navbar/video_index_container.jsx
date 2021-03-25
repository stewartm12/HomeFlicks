import React from 'react';
import VideoIndex from './video_index';
import {fetchGenres} from '../../actions/genre_actions';
import {connect} from 'react-redux';
import {fetchMovie} from '../../actions/movie_actions'
import {deleteMovie, saveMovie} from '../../actions/mylist_actions'

const mstp = state => {
  debugger
  return {
    genres: Object.values(state.entities.genres),
    userId: state.session.id,
    myList: state.entities.users[state.session.id].myList,
    myListName: 'My List'
    // movies: Object.values(state.entities.genres.movies)
  }
}

const mdtp = dispatch => {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
    saveMovie: (userId, movieId) => dispatch(saveMovie(userId, movieId)),
    deleteMovie: (userId, movieId) => dispatch(deleteMovie(userId, movieId)),
    fetchMovie: movieId => dispatch(fetchMovie(movieId))
  }
}




export default connect(mstp, mdtp)(VideoIndex);