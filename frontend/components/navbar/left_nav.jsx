import React from 'react';
import {Link} from 'react-router-dom';




class LeftNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-link">
        <Link to="/browse"><img src={window.logo} alt="homeflicks logo" className="browse-logo"/></Link>
        <Link to="/browse">Home</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="movies">Movies</Link>
        <Link to="my-list">My List</Link>
      </div>
    )
  }
}








export default LeftNav;