import React from 'react';
import RightNavContainer from './right_nav_container';
import LeftNav from './left_nav';
import VideoIndexContainer from './video_index_container';
import MyListContainer from '../myList/mylist_container';
import {Switch, Route} from 'react-router-dom';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.navBar = React.createRef();
  }

  render() {
    return(
      <div className="main-container">
        <div className="nav-link-wrapper" ref={this.navBar}>
          <section>
            <LeftNav />
          </section>
          <section>
            <RightNavContainer/>
          </section>
        </div>
        <section>
      <Switch>
        <Route exact path="/browse" component={VideoIndexContainer} />
        <Route exact path='/browse/my-list' component={MyListContainer}/>
      </Switch>
      </section>
      </div>
    )
  }
}

export default MainNav;