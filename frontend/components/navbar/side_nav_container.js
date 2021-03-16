import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import SideNav from './side_nav';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return{
    logout: () => dispatch(logout())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);
