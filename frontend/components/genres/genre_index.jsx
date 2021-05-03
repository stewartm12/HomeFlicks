import React from 'react';
// import VideoIndexItem from '../videos/video_index_item';
import VideoItemContainer from "../videos/video_item_container"


class GenreIndex extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
  let movies = Object.values(this.props.movies);
  let movieList = movies.map((movie, index) => {
    return (
      <VideoItemContainer
        key={index}
        movie={movie}
      />
      )
    });

  return (
      <div className="genre-index ">
        <h2 className="genre-name"><strong>{this.props.genre.name}</strong></h2>
        <div className="row-wrapper">
          {movieList}
        </div>
      </div>
    )
}
}
export default GenreIndex;