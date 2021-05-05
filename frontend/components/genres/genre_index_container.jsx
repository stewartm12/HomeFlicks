import React from "react";
import GenreIndex from "./genre_index";
import { fetchGenres } from "../../actions/genre_actions";
import { connect } from "react-redux";
import { fetchMovie } from "../../actions/movie_actions";
import { deleteMovie, saveMovie } from "../../actions/mylist_actions";
import { selectAllVideos } from "../../reducers/selectors";
import { withRouter } from "react-router-dom";


const mstp = (state) => {
    
  return {
    genres: selectAllVideos(state),
    userId: state.session.id,
    myList: state.entities.users[state.session.id].myList
    // movies: selectAllVideos(state)
  };
};

const mdtp = (dispatch) => {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
    saveMovie: (userId, movieId) => dispatch(saveMovie(userId, movieId)),
    deleteMovie: (userId, movieId) => dispatch(deleteMovie(userId, movieId)),
    fetchMovie: (movieId) => dispatch(fetchMovie(movieId)),
  };
};

export default withRouter(connect(mstp, mdtp)(GenreIndex));
