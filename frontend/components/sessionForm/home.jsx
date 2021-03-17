import React from 'react';
import {Link} from 'react-router-dom';

const Home = props => {
  return(
    <div className="home-body">
      <img src={window.backImage} className="homebackground"/>
      <div className="home-header">
        <img src={window.logo} />
        <section>
          <p>Already have an account?</p>
          <Link to="/login">Log In</Link>
        </section>
      </div>
      <div className="home-text">
        <h2>Unlimited movies, TV shows, and more.</h2>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Click below to create your account.</p> 
        <Link to="/signup" className="home-signup">Get Started {'>'}</Link>
      </div>
    </div>
  )
}



export default Home;