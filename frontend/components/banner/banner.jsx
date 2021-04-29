import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      muted: true,
      hidden: true
    }
    this.togglePlay = this.togglePlay.bind(this)
    this.video =  React.createRef();
    this.volume = this.volume.bind(this);
  }

  movieId() {
    let movieId = Math.floor(Math.random() * 16);
    if(movieId === 0) movieId = 10;
    return movieId;
  }

  componentDidMount() {
    this.props.fetchMovie(this.movieId())
  }


  togglePlay() {
    this.video.current.webkitEnterFullScreen();
    this.setState({muted: false})
    // if(this.video.current.paused) {
    //   this.setState({playButton: !this.state.playButton})
    //   const play = this.video.current.play();
    //   if (play == undefined) return this.video.current.pause();
    // } else {
    //   this.setState({playButton: !this.state.playButton})
    //   this.video.current.pause();
    // }
  }


   stopMedia() {
    this.video.current.pause();
    this.video.current.currentTime = 0;
    this.setState({playButton: false});
  }

  volume() {
    if(this.video.current.muted) {
      this.setState({muted: false})
    } else {
      this.setState({muted: true})
    }    
  }

  render() {
    const play =  <FontAwesomeIcon icon={['fa', 'play']} />;
    const sound = this.state.muted ? <FontAwesomeIcon icon={['fa', 'volume-mute']}/> :  <FontAwesomeIcon icon={['fa', 'volume-up']}/>;

    if(this.props.movie.length) {
      let movie = this.props.movie[this.props.movie.length - 1];
      return(
        <div className="banner-container">
  
          <div className="banner-player">
            <div className="banner-video-wrapper">
            <video ref={this.video}  autoPlay muted={this.state.muted} onClick={this.volume}>
              <source src={movie.trailer} type="video/mp4"/>
            </video>
            <div className="banner-desc-container">
            <div className="banner-title">
              <h2>{movie.title}</h2>
            </div>
              <div className="banner-description">
              <p>{movie.description}</p>
              {/* <p className="banner-rating">{movie.rating}</p> */}
              </div>
              </div>
            <div className="banner-controls">
              <button onClick={this.togglePlay} className="play" aria-label="play toggle">{play} </button>
              <button className="sound" onClick={this.volume}>{sound}</button>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return "";
    }
  }
}

export default Banner;