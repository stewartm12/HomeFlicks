import React from 'react';
import RightNavContainer from './right_nav_container';
import LeftNav from './left_nav';
import VideoIndexContainer from './video_index_container';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
      <header className="nav-link">
        <section>
          <LeftNav />
        </section>
        <section>
          <RightNavContainer/>
        </section>
      </header>
      <VideoIndexContainer/>
      </>
    )
  }
}

export default MainNav;