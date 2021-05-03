import {fetchMovie} from '../../actions/movie_actions';
import {deleteMovie, saveMovie} from '../../actions/mylist_actions';
import Banner from './banner';
import {connect} from 'react-redux';
import {selectBannerVideo} from "../../reducers/selectors"

const mSTP = state => {
  return {
    userId: state.session.id,
    movie: selectBannerVideo(state)
  }
}

const mDTP = dispatch => {
  return {
    fetchMovie: (movieId) => dispatch(fetchMovie(movieId)),
    deleteMovie: (userId, movieId) => dispatch(deleteMovie(userId, movieId)),
    saveMovie: (userId, movieId) => dispatch(saveMovie(userId, movieId))
  }
}

export default connect(mSTP, mDTP)(Banner);