import React from 'react';
import VideoIndexItem from '../navbar/video_index_item';

class MyList extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    let videoItems = this.props.movies.map(movie => {
      return(
        <VideoIndexItem key={movie.id} movie={movie} userId={this.props.userId} saveMovie={this.props.saveMovie} deleteMovie={this.props.deleteMovie}/>
      )
    })
    return(
      <div className="mylist-container">
        <h2>My List</h2>
          {videoItems.length > 0 ? videoItems : <p className="no-favorites">You have no favorites</p>}
      </div>
    )
  }
}

export default MyList;
