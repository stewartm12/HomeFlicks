import React from 'react';
import VideoIndex from './video_index';
import {fetchMovie} from '../../actions/movie_actions';
import {connect} from 'react-redux';

const mstp = state => {
  debugger
  return {
    movie: state.entities.movies[0]
  }
}

const mdtp = dispatch => {
  return {
    fetchMovie: () => dispatch(fetchMovie())
  }
}




export default connect(mstp, mdtp)(VideoIndex);