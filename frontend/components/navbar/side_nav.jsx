import React from 'react';
import { Link } from 'react-router-dom';


const SideNav = ({ currentUser, logout }) => {
    return(
    <div >
      <h2 >Hi, {currentUser.email}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
    )
};


export default SideNav;
