import React from 'react';
import RightNavContainer from './right_nav_container';
import LeftNav from './left_nav';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <header className="nav-link">
        <section>
          <LeftNav />
        </section>
        <section>
          <RightNavContainer/>
        </section>
      </header>
    )
  }
}

export default MainNav;