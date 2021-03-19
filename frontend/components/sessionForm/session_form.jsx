import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
    this.props.processForm({email: 'email2', password: 'password2'});
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

    let sessionText = (this.props.formType === 'login') ? <p >New to HomeFlicks?</p> : <p >Already have an account?</p>
    
    let sessionLink = (this.props.formType === 'login') ? <Link to="/signup">Sign up now</Link> : <Link to="/login">Log in now</Link>;


    return (
      <div className="session-body">
        <img src={window.backImage} className="session-homebackground"/>
        <div className="session-header">
          <Link to='/'><img src={window.logo} /></Link>
        </div>
        <form onSubmit={this.handleSubmit} className="session-form">
          <p>{this.props.formType}</p>
          {errors}
          <div className="session-inputs">
              <label htmlFor="email">
              <input id="email" type="text" value={this.state.email} onChange={this.update('email')} className="email-input"  />
              <span className="session-float">email</span>
              </label>
            <br/>
              <label htmlFor="password">
              <input id="password" type="password" value={this.state.password} onChange={this.update('password')} className="password-input" />
              <span className="session-float">password</span>
              </label>
            <br/>
            <input type="submit" value={this.props.formType} />
          </div>
          <div className="bottom-form">
            {sessionText}
            {sessionLink}
          </div>
          <button onClick={this.loginDemo}>Demo Login</button>
        </form>
        
      </div>
    );
  }
}

export default SessionForm;
