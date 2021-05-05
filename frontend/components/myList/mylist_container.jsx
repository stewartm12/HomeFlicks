import React from 'react';
// import MyList from './mylist';
import {connect} from 'react-redux';
import {saveMovie, deleteMovie} from '../../actions/mylist_actions';
// import MyList from './mylist';
// import VideoIndex from '../videos/video_index';
import {withRouter} from 'react-router-dom'
import GenreIndex from '../genres/genre_index';

const mSTP = state => {
  const userId = state.session.id;
  
  return {
    // movies: Object.values(state.entities.users[userId].myList),
    userId: state.session.id,
    myList: state.entities.users[state.session.id].myList,
  }
}


const mDTP = dispatch => {
  return {
    saveMovie: (userId, movieId) => dispatch(saveMovie(userId, movieId)),
    deleteMovie: (userId, movieId) => dispatch(deleteMovie(userId, movieId))
  }
}

export default withRouter(connect(mSTP, mDTP)(GenreIndex));