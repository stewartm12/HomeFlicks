import React from 'react';
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import VideoIndexContainer from "../videos/video_index_container";
import MyListContainer from "../myList/mylist_container";
import { ProtectedRoute } from "../../util/route_util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleSearchClick = this.handleSearchClick.bind(this);
	}

	handleSearchClick() {

	}

	render() {
		const {loggedIn, logout} = this.props;

		if (loggedIn) {
		return (
  	  <>
  	    <div className="navbar-container">
  	      <div className="nav-link">
  	        <Link to="/browse">
  	          <img
  	            src={window.logo}
  	            alt="homeflicks logo"
  	            className="browse-logo"
  	          />
  	        </Link>
  	        <ul className="nav-link-content">
  	          <li>
  	            <Link to="/browse">Home</Link>
  	          </li>

  	          {/* <Link to="/browse/tvshows">TV Shows</Link>
  	      <Link to="/browse/movies">Movies</Link> */}
  	          <li>
  	            <a>TV Shows</a>
  	          </li>
  	          <li>
  	            <a>Movies</a>
  	          </li>
  	          <li>
  	            <Link to="/browse/my-list">My List</Link>
  	          </li>
  	        </ul>
  	      </div>

  	      <div className="right-nav">
  	        <div className="search-form-container">
  	          <form className="search-form" onClick={this.handleSearchClick}>
  	            {/* <FontAwesomeIcon icon={["fa", "search"]} /> */}
  	            <input type="search" placeholder="Titles, genres" />
  	          </form>
  	        </div>

  	        <div className="dropdown-container">
  	          <div className="dropdown-menu">
  	            <img
  	              src={window.profileLogo}
  	              alt="profile logo"
  	              className="profile-logo"
  	            />
  	            <div className="arrow-down"></div>
  	          </div>
  	          <div className="dropdown-content">
  	            <a onClick={logout} value="Logout">
  	              Logout
  	            </a>
  	            <a href="https://github.com/stewartm12" target="_blank">
  	              github
  	            </a>
  	            <a
  	              href="https://www.linkedin.com/in/stewart-m-44508a136/"
  	              target="_blank"
  	            >
  	              linkedIn
  	            </a>
  	          </div>
  	        </div>
  	      </div>
  	    </div>
  	    {/* <Switch>
  	      <ProtectedRoute exact path="/browse" component={VideoIndexContainer} />
  	      <ProtectedRoute exact path="/browse/my-list" component={MyListContainer} />
  	    </Switch> */}
  	  </>
  	);} else {
			return "";
		}
	}
};

export default NavBar;


