import React from 'react';
import VideoIndexItem from '../navbar/video_index_item';

class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: this.props.movies}
  }


  render () {
    let videoItems = this.state.movies.map(movie => {
      return(
        <VideoIndexItem key={movie.id} movie={movie} userId={this.props.userId} saveMovie={this.props.saveMovie} deleteMovie={this.props.deleteMovie}/>
      )
    })
    return(
      <div className="genre-index">
        <h2 className="genre-name"><strong>My List</strong></h2>
          <div className="row-wrapper">
          {videoItems.length > 0 ? videoItems : <p className="no-favorites">You have no favorites</p>}
          </div>
      </div>
    )
  }
}

export default MyList;
