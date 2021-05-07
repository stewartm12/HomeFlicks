import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../modal/modal"

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muted: true,
      show: false,
    };

    this.togglePlay = this.togglePlay.bind(this);
    this.video = React.createRef();
    this.volume = this.volume.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.displayThumbnail = this.displayThumbnail.bind(this);
    this.handleResizeWindow = this.handleResizeWindow.bind(this);
    this.autoPlay = true;
    this.videoTimeout;
  }

  handleResizeWindow(e) {
    if (this.video.current.webkitDisplayingFullscreen) {
      this.togglePlay();
    } else {
      this.displayThumbnail();
    }
  }

  displayThumbnail() {
    this.video.current.load();
  }

  handleScroll() {
      let video = this.video.current;

      if (!video) return;

      if (window.pageYOffset < 100) {
        // 
        if (this.videoTimeout) clearTimeout(this.videoTimeout);
        this.videoTimeout = setTimeout(() => {
          this.video.current.play();
        }, 5000);
      } else {
        clearTimeout(this.videoTimeout)
        video.load();
      }
  }

  movieId() {
    let movieId = Math.floor(Math.random() * 16);
    if (movieId === 0) movieId = 10;
    return movieId;
  }

  componentDidMount() {
    this.props.movie.length > 0
      ? this.props.movie
      : this.props.fetchMovie(this.movieId());

      this.videoTimeout = setTimeout(() => {
        this.video.current.play();
      }, 5000)
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("fullscreenchange", this.handleResizeWindow)

    
  }

  componentWillUnmount() {
    clearTimeout(this.videoTimeout)
  }

  togglePlay() {
    this.video.current.load();
    // this.video.current.play();
    this.video.current.requestFullscreen();
    this.setState({ muted: false });
  }

  stopMedia() {
    this.video.current.pause();
    this.video.current.currentTime = 0;
    this.setState({ playButton: false });
  }

  volume() {
    if (this.video.current.muted) {
      this.setState({ muted: false });
    } else {
      this.setState({ muted: true });
    }
  }

  render() {
    
    const play = <FontAwesomeIcon icon={["fa", "play"]} />;
    const sound = this.state.muted ? (
      <FontAwesomeIcon icon={["fa", "volume-mute"]} />
    ) : (
      <FontAwesomeIcon icon={["fa", "volume-up"]} />
    );
    const info = <FontAwesomeIcon icon={["fa", "info-circle"]} />;


    if (this.props.movie.length) {
      let movie = this.props.movie[0];
      return (
        <div className="banner-container">
          <div className="banner-player">
            <div className="banner-video-wrapper">
              <video
                ref={this.video}
                poster={movie.thumbnail}
                // autoPlay
                muted={this.state.muted}
                onEnded={this.displayThumbnail}
              >
                <source src={movie.trailer} type="video/mp4" />
              </video>

              <div className="banner-desc-container">
                <div className="banner-title">
                  <h2>{movie.title}</h2>
                </div>
                {/* <div className="banner-description">
                  <p>{movie.description}</p>
                </div> */}
              </div>
              <div className="banner-controls">
                <button
                  onClick={this.togglePlay}
                  className="banner-play"
                  aria-label="play toggle"
                >
                  {play} Play{" "}
                </button>
                <button 
                  className="banner-info"
                  onClick={() => this.setState({show: true})}
                  >
                    {info} info
                </button>

                <Modal 
                  movie={this.props.movie[0]} 
                  show={this.state.show} 
                  onClose={() => this.setState({show: false})}
                  />
              </div>

              <div className="right-side-banner">
                <button className="banner-sound" onClick={this.volume}>
                  {sound}
                </button>
                <span className="banner-rating">{movie.rating}</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return "";
    }
  }
}

export default Banner;