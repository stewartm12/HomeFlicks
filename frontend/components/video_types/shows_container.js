import { connect } from 'react-redux';
// import DisplayVideoType from './display_video_type';
import { withRouter } from 'react-router-dom';
import { selectAllVideos } from '../../reducers/selectors';
import GenreIndex from '../genres/genre_index';
import {fetchGenres} from '../../actions/genre_actions';


const mstp = (state) => {
    const movies = [];
    const genres = Object.values(state.entities.genres);
    for (let i = 0; i < genres.length; i++) {
        let genre= genres[i];
        let genreMovies = Object.values(genre.movies);

        for (let i = 0; i < genreMovies.length; i++) {
            let show = genreMovies[i];
            if (show.videoType === "Show") movies.push(show)
        }
    }

    
  return {
    genres: selectAllVideos(state),
      movies,
      type: "Shows"
  };
};

const mdtp = (dispatch) => {
  return {
    fetchGenres: () => dispatch(fetchGenres())
  };
};


export default withRouter(connect( mstp, mdtp)(GenreIndex));
