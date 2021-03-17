import React from 'react';
import { Link } from 'react-router-dom';


const RightNav = ({ currentUser, logout }) => {
    return(
    <div className="nav-link">
      <form className="search-form">
	      <input type="search" placeholder="Titles, genres"/>
      </form>
      <div className="dropdown">
        <img src={window.profileLogo} alt="profile logo" className="profile-logo"/>
        <button onClick={logout}>logout</button>
        < div className="triangle-dd">
        </div>
      </div>
    </div>
    )
};


export default RightNav;
