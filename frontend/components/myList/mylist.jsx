import React from 'react';
import VideoItemContainer from "../videos/video_item_container";

class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: this.props.movies}
  }


  render () {
    let videoItems = this.state.movies.map(movie => {
      return (
        <VideoItemContainer
          key={`movie-${movie.id}`}
          movie={movie}
        />
      );
    })

    let displayVideos =
      videoItems.length > 0 ? (
        videoItems
      ) : (
        <p className="no-favorites">You have no favorites</p>
      );


    return (
      <div className="genre-index  my-list">
        <h2 className="genre-name">
          <strong>My List</strong>
        </h2>
        <div className="row-wrapper">
          {displayVideos}
        </div>
      </div>
    );
  }
}

export default MyList;
