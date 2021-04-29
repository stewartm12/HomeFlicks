import React from 'react';
import GenreIndex from '../genres/genre_index';
import BannerContainer from '../banner/banner_container'

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBar: false,
      setNavBar: false
    }
  }

  componentDidMount() {
    this.props.genres.length > 0 ? this.props.genres : this.props.fetchGenres();
  }

  render () {
    debugger
    let genreList = this.props.genres.map((genre, index) => {
      return(
        <>
          <GenreIndex key={`genre${index}`} userId={this.props.userId} genre={genre} movies={genre.movies} saveMovie={this.props.saveMovie} deleteMovie={this.props.deleteMovie}/> 
        </>
      )
    })
    let genres = this.props.genres ? genreList : "";

    return(
      <div>
        <div className="banner-wrapper">
          <BannerContainer/>
        </div>
        <div className="firstvideo">
          {genres}
        </div>
      </div>
    )
  }
}

export default VideoIndex;