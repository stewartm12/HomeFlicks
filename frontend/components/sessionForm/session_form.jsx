import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    let filledEmail;
    if (this.props.homeProp) {
      filledEmail = this.props.homeProp.email;
    } else {
      filledEmail = '';
    }
    this.state = {
      email: filledEmail,
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  loginDemo() {
    this.props.demo({email: 'email2', password: 'password2'});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    let errors = (this.renderErrors().props.children.length !== 0) ? <p className="login-errors">{this.renderErrors()} Please try again</p> : "";

    let login = (
      <div className="session-body">
        <img src={window.backImage} className="session-homebackground"/>
        <div className="session-header">
          <Link to='/'><img src={window.logo} className="session-logo"/></Link>
        </div>
        <form onSubmit={this.handleSubmit} className="session-form">
          <h1>Sign In</h1>
          {errors}
          <div className="session-inputs">
              <label htmlFor="email">
              <input id="email" type="text" value={this.state.email} onChange={this.update('email')} className="email-input"  />
              <span className="session-float">email</span>
              </label>
            <br/>
              <label htmlFor="password">
              <input id="password" type="password" value={this.state.password} onChange={this.update('password')} className="password-input" />
              <span className="password-float">password</span>
              </label>
            <br/>
            <input type="submit" value="Sign In" />
          </div>
          <div className="bottom-form">
          <p >New to HomeFlicks?</p>
          <Link to="/">Sign up now</Link>
          </div>
        </form>
        
      </div>
    )

    let signup = (
      <div className="signup-container">
        <div className="session-header-signin">
          <Link to='/'><img src={window.logo} className="signup-logo" /></Link>
          <Link to='/login' className="signin-session-login">Sign In</Link>
        </div>
        <div className="signup-back"></div>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div className="signup-form">
            <div className="signup-text">
              <h2>Create a password to start your membership.</h2>
              <p>Just a few more steps and you're done!</p>
              <p>We hate paperwork, too.</p>
            </div>
            <div className="signup-input">
              <input type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
              />
              <br/>
              <input type="password"
                placeholder="Add a password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </div>
            <br/>
            <input className="signup-submit" type="submit" value="Continue" />
          </div>
        </form>
              <button className="demo-btn" onClick={this.loginDemo}>Demo</button>
      </div>
    )
    return this.props.formType === 'login' ? (login) : (signup);
  }
}
   
export default SessionForm;
