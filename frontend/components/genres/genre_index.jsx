import React from 'react';
// import VideoIndexItem from '../videos/video_index_item';
import VideoItemContainer from "../videos/video_item_container"


class GenreIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.genres.length > 0 ? this.props.genres : this.props.fetchGenres();
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

    let movies = Object.values(this.props.myList);

    let movieList = movies.map((movie, index) => {
      return <VideoItemContainer key={index} movie={movie} type="MY-LIST" />;
    });

    if (movieList.length > 0) {
      return movieList;
    } else {
      return (
        <h3 className="no-saved-videos">You have no saved videos currently</h3>
      );
    }
  }

  displayMovies() {
    if (this.props.type === "Movies") {
      // const {movies} = this.props;
      let movies = this.props.movies;

      let movieList = movies.map((movie, index) => {
        return <VideoItemContainer key={index} movie={movie} />;
      });

      return movieList;
    } else {
      // const {shows} = this.props;
      let shows = this.props.movies;
      let showsList = shows.map((movie, index) => {
        return <VideoItemContainer key={index} movie={movie} />;
      });

      return showsList;
    }
  }

  displayURLPage() {
    return this.props.location.pathname === "/browse"
      ? this.displayBrowse()
      : this.props.location.pathname === "/my-list"
      ? this.displayMyList()
      : this.props.location.pathname === "/movies"
      ? this.displayMovies()
      : this.displayMovies();
  }

  displayTitle() {
    return this.props.location.pathname === "/browse"
      ? this.props.genre.name
      : this.props.location.pathname === "/my-list"
      ? "My List"
      : this.props.location.pathname === "/movies"
      ? "Movies"
      : "Shows";
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

    const urlPage = this.displayURLPage();
    const title = this.displayTitle();
    const listClass =
      this.props.location.pathname === "/browse" ? "" : "my-list";
    const rowClass =
      this.props.location.pathname === "/browse" ? "" : "row-list";
    //
    return (
      <div className={`genre-index ${listClass}`}>
        <h2 className="genre-name">
          <strong>{title}</strong>
        </h2>
        <div className={`row-wrapper ${rowClass}`}>{urlPage}</div>
      </div>
    );
  }
}
export default GenreIndex;