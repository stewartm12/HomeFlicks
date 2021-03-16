import React from 'react';
import { Link } from 'react-router-dom';


const SideNav = ({ currentUser, logout }) => {
  debugger
  const sessionLinks = () => (
    <nav >
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup >
      <h2 >Hi, {currentUser.email}!</h2>
      <button onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default SideNav;
