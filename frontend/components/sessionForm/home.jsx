import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.email !== "") {
      this.setState({
        redirect: true
      })
    }
  }

  render(){
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: "/signup",
        state: { email: this.state.email } }}/>
    }

    return(
    <div className="home-body">
      <img src={window.backImage} className="homebackground"/>
      <div className="home-header">
        <img src={window.logo} className="home-logo" />
        <Link to="/login" className="home-login">Sign In</Link>
      </div>
      <div className="home-text">
        <h2>Unlimited movies, TV shows, and more.</h2>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Create your account below.</p> 
        <section>
        <div>
                <form onSubmit={this.handleSubmit} className="home-form">
                  <input className='home-email-input' type='text' onChange={this.update('email')} required/>
                  <span className="email-label">Email address</span>
                  <input className='home-email-submit' type="submit" value={`Get Started`} /> 
                </form>
              </div>
        </section>
      </div>
      <section className="home-links">
        <a href="https://github.com/stewartm12" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /> </a>
        <a href="https://www.linkedin.com/in/stewart-m-44508a136/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /> </a>
      </section>
    </div>
    )
  }
}


export default Home;