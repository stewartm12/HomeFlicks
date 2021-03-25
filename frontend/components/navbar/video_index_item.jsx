import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      playButton: false,
      volume: true,
      hidden: true,
      saved: false,
      movieId: this.props.movie.id,
      userId: this.props.userId
    }
    this.togglePlayPause = this.togglePlayPause.bind(this)
    this.displayControls = this.displayControls.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.volume = this.volume.bind(this);
    this.playerContainer = React.createRef();
    this.videoItemDesc = React.createRef();
    this.videoControls = React.createRef();
    this.description = React.createRef();
    this.video =  React.createRef();
  }

  saveMovie() {
    this.props.saveMovie(this.state.userId, this.state.movieId);
    this.setState({saved: true});
  }

  removeMovie() {
    this.props.deleteMovie(this.state.userId, this.state.movieId);
    this.setState({saved: false});
  }

  togglePlayPause() {
    if(this.video.current.paused) {
      this.setState({playButton: !this.state.playButton})
      const play = this.video.current.play();
      if (play == undefined) return this.video.current.pause();
      this.video.current.webkitEnterFullScreen();
    } else {
      this.setState({playButton: !this.state.playButton})
      this.video.current.pause();
    }
  }

   stopMedia() {
    this.video.current.pause();
    this.video.current.currentTime = 0;
    this.setState({playButton: false});
  }

  displayControls() {
    if (this.state.hidden) {
      this.setState({hidden: false});
      this.videoControls.current.classList.remove('none');
      this.videoItemDesc.current.classList.remove('desc-hidden')
    } else {
      this.setState({hidden: true});
      this.videoControls.current.classList.add('none')
      this.videoItemDesc.current.classList.add('desc-hidden')
    }
  }

  volume() {
    if(!this.video.current.muted) {
      this.setState({volume: false})
    } else {
      this.setState({volume: true})
    }    
  }


  render() {
    const playPause = this.state.playButton ? <FontAwesomeIcon icon={['fa', 'pause']} /> : <FontAwesomeIcon icon={['fa', 'play']} />;
    const sound = this.state.volume ?  <FontAwesomeIcon icon={['fa', 'volume-up']}/> : <FontAwesomeIcon icon={['fa', 'volume-mute']}/>;
    const add = <FontAwesomeIcon icon={['fa', 'plus-circle']}/>
    const check = <FontAwesomeIcon icon={['fa', 'check-circle']}/>

    const saveOrRemove = this.state.saved ? <button onClick={this.removeMovie}>{check}</button> : <button onClick={this.saveMovie}>{add}</button>;

    return(
      <div className="whole-player-container">

        <div className="player" onMouseEnter={this.displayControls}  onMouseLeave={this.displayControls} ref={this.playerContainer}>
          <div className="video-wrapper"> 
            <video ref={this.video} onTimeUpdate={this.setTime} muted={!this.state.volume}>
              <source src={this.props.movie.trailer} type="video/mp4"/>
            </video>
            <div className="controls none" ref={this.videoControls}>
              <button onClick={this.togglePlayPause} className="play" aria-label="play pause toggle">{playPause} </button>
              {saveOrRemove}
              <button className="sound" onClick={this.volume}>{sound}</button>
            </div>
            <div className="video-item-desc desc-hidden" ref={this.videoItemDesc}>
              <p>{this.props.movie.title}</p>
              <p>{this.props.movie.year}</p>
              <p className="video-rating">{this.props.movie.rating}</p>
            </div>
          </div>
        </div>
      </div>
  )}
}

export default VideoIndexItem;