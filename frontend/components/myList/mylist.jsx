import React from 'react';

class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.myList;
  }

  remove() {

  }


  render () {
    let videoItems = this.state

    return(
      <div className="mylist-container">
        <h2>WHATS HAPPENING</h2>
      </div>
    )
  }
}

export default MyList;