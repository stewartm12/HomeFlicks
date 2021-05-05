import { connect } from "react-redux";
import { saveMovie, deleteMovie } from "../../actions/mylist_actions";
import VideoIndexItem from "../videos/video_index_item";
import { withRouter } from "react-router-dom";

const mSTP = (state) => {
  return {
    userId: state.session.id,
    myList: state.entities.users[state.session.id].myList,
  };
};

const mDTP = (dispatch) => {
  return {
    saveMovie: (userId, movieId) => dispatch(saveMovie(userId, movieId)),
    deleteMovie: (userId, movieId) => dispatch(deleteMovie(userId, movieId)),
  };
};

export default withRouter(connect(mSTP, mDTP)(VideoIndexItem));
