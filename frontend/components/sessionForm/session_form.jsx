import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="password"
              />
            <br/>
            <input type="submit" value={this.props.formType} />
          </div>
          <div className="bottom-form">
            {sessionText}
            {sessionLink}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
