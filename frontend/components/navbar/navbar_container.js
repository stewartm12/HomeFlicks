import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { withRouter } from 'react-router-dom';
import {searchVideos} from '../../actions/video_actions';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  const query = new URLSearchParams(ownProps.location.search).get('q') || "";

  return {
      loggedIn: session.id,
      query
  };
};

const mapDispatchToProps = dispatch => {
  return{
    search: query => dispatch(searchVideos(query)),
    logout: () => dispatch(logout())
  }
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(NavBar));
