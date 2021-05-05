import React from 'react';
// import VideoIndexItem from '../videos/video_index_item';
import VideoItemContainer from "../videos/video_item_container"


class GenreIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  displayBrowse() {
    let movies = Object.values(this.props.movies);
    
    let movieList = movies.map((movie, index) => {
      return <VideoItemContainer key={index} movie={movie} type="BROWSE" />;
    });
    
    return movieList;
  }

  displayMyList() {
    if (!this.props.myList) {
      return (
        <h3 className="no-saved-videos">You have no saved videos currently</h3>
      );
    }

    
    let movies = Object.values(this.props.myList)
    
    let movieList = movies.map((movie, index) => {
      return <VideoItemContainer key={index} movie={movie} type="MY-LIST" />;
    });

    if (movieList.length > 0) {
      return movieList;
    } else {
      return (
        <h3 className="no-saved-videos">You have no saved videos currently</h3>
      )
    }

  }

  render() {
  // let movies = Object.values(this.props.movies);
  // let movieList = movies.map((movie, index) => {
  //   return (
  //     <VideoItemContainer
  //       key={index}
  //       movie={movie}
  //     />
  //     )
  //   });

  const urlPage = this.props.location.pathname === "/browse" ? this.displayBrowse() : this.displayMyList();
  const title = this.props.location.pathname === "/browse" ? this.props.genre.name : "My List";
  const listClass = this.props.location.pathname === "/browse" ? "" : "my-list"

  
  return (
      <div className={`genre-index ${listClass}`}>
        <h2 className="genre-name"><strong>{title}</strong></h2>
        <div className="row-wrapper">
          {urlPage}
        </div>
      </div>
    )
}
}
export default GenreIndex;