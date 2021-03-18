import React from 'react';
import { Link } from 'react-router-dom';


const RightNav = ({ currentUser, logout }) => {
    return(
      <div className="right-nav">
      <div className="nav-link">
        <form className="search-form">
          <input type="search" placeholder="Titles, genres"/>
        </form>
      </div>


      
      <nav>
      <ul>
        <li>
        <div className=".dropdown-menu">
            <img src={window.profileLogo} alt="profile logo" className="profile-logo"/>
            < div className="triangle-dd" >
            </div>
        </div>
          <ul>
            <li><input type='submit' onClick={logout} value='Logout'/></li>    
          </ul>
        </li>
      </ul>
    </nav>
    </div>
    )
};


export default RightNav;




