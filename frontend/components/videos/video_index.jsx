import React from 'react';
import GenreIndexContainer from '../genres/genre_index_container';
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


  displayGenres() {
    
    return this.props.genres.map((genre, index) => {
      return (
        <>
          <GenreIndexContainer
            key={`vid`}
            movies={genre.movies}
            genre={genre}
          />
        </>
      );
    });
  }

  render () {
    let genres = this.props.genres.length ? this.displayGenres() : "";
    return(
      <div>
        <div className="banner-wrapper">
          <BannerContainer/>
        </div>
        <div className="firstvideo">
          {genres}
        </div>
        <div className="bottom-links">
        </div>
      </div>
    )
  }
}

export default VideoIndex;