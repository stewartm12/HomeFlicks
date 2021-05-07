import { connect } from 'react-redux';
// import DisplayVideoType from './display_video_type';
import { withRouter } from 'react-router-dom';
import GenreIndex from '../genres/genre_index';
import { selectAllVideos } from "../../reducers/selectors";
import {fetchGenres} from '../../actions/genre_actions';


const mstp = (state, ownProps) => {
    const movies = [];
    const genres = Object.values(state.entities.genres);
    for (let i = 0; i < genres.length; i++) {
        let genre= genres[i];
        let genreMovies = Object.values(genre.movies);

        for (let i = 0; i < genreMovies.length; i++) {
            let movie = genreMovies[i];
            if (movie.videoType === "Movie") movies.push(movie)
        }
    }

    
  return {
    genres: selectAllVideos(state),
      movies,
      type: "Movies"
  };
};

const mdtp = (dispatch) => {
  return {
    fetchGenres: () => dispatch(fetchGenres())
  };
};


export default withRouter(connect( mstp, mdtp)(GenreIndex));
