import React from "react";
import MainNav from "./navbar/main_nav";
import {Switch} from 'react-router-dom';
import LoginFormContainer from './sessionForm/login_form_container';
import SignupFormContainer from './sessionForm/signup_form_container';
import HomeContainer from './sessionForm/home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import './fontawesome';


const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={HomeContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/browse" component={MainNav} />
    </Switch>

  </div>
);

export default App;