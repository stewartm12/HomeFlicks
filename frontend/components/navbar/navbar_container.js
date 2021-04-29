import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
      loggedIn: session.id,
  };
};

const mapDispatchToProps = dispatch => {
  return{
    logout: () => dispatch(logout())
  }
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(NavBar));
