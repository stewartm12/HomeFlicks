import React from 'react';
import VideoIndexItem from '../navbar/video_index_item';


class GenreIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {hidden: true}
  }

  render() {

    let movies = Object.values(this.props.movies) ? Object.values(this.props.movies) :  "";
    let movieList = (!movies) ? "" : movies.map((movie, index) => {
      return (
        <VideoIndexItem key={`movie${index}`} movie={movie} userId={this.props.userId} saveMovie={this.props.saveMovie} deleteMovie={this.props.deleteMovie}/>
        )
      })
      return (
        <div className="genre-index">
      <h2 className="genre-name"><strong>{this.props.genre.name}</strong></h2>
      <div className="row-wrapper">
      {movieList}
      </div>
    </div>
  )
}
}


export default GenreIndex;