import React from "react";
import {Switch, Route} from 'react-router-dom';
import LoginFormContainer from './sessionForm/login_form_container';
import SignupFormContainer from './sessionForm/signup_form_container';
import HomeContainer from './sessionForm/home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MyListContainer from './myList/mylist_container'
import './fontawesome';
import NavBarContainer from "./navbar/navbar_container";
import VideoIndexContainer from "./videos/video_index_container";
import displaySearchContainer from "./search/display_search_container";
import MoviesContainer from "./video_types/movies_container";
import ShowsContainer from "./video_types/shows_container";




const App = () => (
  <div className="background">
    <NavBarContainer />

    <Switch>
      <AuthRoute exact path="/" component={HomeContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/browse" component={VideoIndexContainer} />
      <ProtectedRoute exact path="/my-list" component={MyListContainer} />
      <ProtectedRoute path="/movies" component={MoviesContainer} />
      <ProtectedRoute path="/shows" component={ShowsContainer} />
      <ProtectedRoute path="/search" component={displaySearchContainer} />
      {/* <Route path="/" component={}></Route> */}
      {/* <Pr otectedRoute exact path="/my-list" component={MyListContainer}/> */}
    </Switch>
  </div>
);

export default App;