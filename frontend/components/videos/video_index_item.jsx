import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../modal/modal";



class VideoIndexItem extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      playButton: false,
      volume: true,
      show: false,
      movieId: this.props.movie.id,
      userId: this.props.userId,
      saved: this.savedVideo()
    };
    this.stopMiniVideo = this.stopMiniVideo.bind(this);
    this.playMiniVideo = this.playMiniVideo.bind(this);
    this.handleResizeWindow = this.handleResizeWindow.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.playerContainer = React.createRef();
    this.videoControls = React.createRef();
    this.description = React.createRef();
    this.video = React.createRef();
    this.videoTimeOut;
  }

  savedVideo() {
    const {type} = this.props;
    
    if (type === "MY-LIST") {
      return true;
    }
    
    if (this.props.myList === undefined) return false;
    const movieId = this.props.movie.id;
    const myListId = Object.keys(this.props.myList);
    
    if (myListId.includes(`${movieId}`)) {
      return true;
    }
    return false
  }

  componentDidMount() {
    window.addEventListener("fullscreenchange", this.handleResizeWindow);
  }

  componentWillUnmount() {
    clearTimeout(this.videoTimeOut);
  }

  handleResizeWindow(e) {
    if (this.video.current.fullscreenElement) {
      this.togglePlay();
    } else {
      this.video.current.load();
      this.setState({ volume: true });
    }
  }

  saveMovie() {
    this.props.saveMovie(this.state.userId, this.state.movieId);
    this.setState({ saved: true });
  }

  removeMovie() {
    this.props.deleteMovie(this.state.userId, this.state.movieId);
    this.setState({ saved: false });
  }

  stopMedia() {
    this.video.current.pause();
    this.video.current.currentTime = 0;
    this.setState({ playButton: false });
  }

  playMiniVideo(e) {
    if (this.videoTimeOut) {
      clearTimeout(this.videoTimeOut);
      this.videoTimeOut = undefined;
    }
    this.videoTimeOut = setTimeout(() => {
      this.video.current.play();
    }, 2000);
    
    this.videoControls.current.classList.remove("none");
  }

  stopMiniVideo(e) {
    
    clearTimeout(this.videoTimeOut);
    this.video.current.load();
    this.video.current.pause();
    this.videoControls.current.classList.add("none");
  }

  togglePlay() {
    clearTimeout(this.videoTimeOut);
    
    let playPromise = this.video.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.video.current.currentTime = 0;
        this.video.current.requestFullscreen();
        this.setState({ volume: false });
      })
      .catch(error => this.video.current.requestFullscreen())
    }
  }

  render() {
    

    const containerClass = this.props.location.pathname === "/search" ? "searching" : ""
    const playButton = <FontAwesomeIcon icon={["fa", "play"]} />;
    const add = <FontAwesomeIcon icon={["fa", "plus-circle"]} />;
    const check = <FontAwesomeIcon icon={["fa", "check-circle"]} />;

    const saveOrRemove = this.state.saved ? (
      <button onClick={this.removeMovie}>{check}</button>
    ) : (
      <button onClick={this.saveMovie}>{add}</button>
    );
      
    return (
      <div
        className={`whole-player-container ${containerClass}`}
        onMouseOver={this.playMiniVideo}
        onMouseLeave={this.stopMiniVideo}
      >

        <video
          className="video"
          poster={this.props.movie.thumbnail}
          muted={this.state.volume}
          ref={this.video}
          // onMouseOver={this.playMiniVideo}
          // onMouseLeave={this.stopMiniVideo}
        >
          <source src={this.props.movie.trailer} type="video/mp4" />
        </video>
        <div
          className="control-container none"
          ref={this.videoControls}
        >
          <div className="controls">
            <button
              onClick={this.togglePlay}
              className="play"
              aria-label="play pause toggle"
            >
              {playButton}{" "}
            </button>
            {saveOrRemove}
          </div>
          <div className="video-item-desc">
            <p>{this.props.movie.title}</p>
            <p>{this.props.movie.year}</p>
            <p className="video-rating">{this.props.movie.rating}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoIndexItem;