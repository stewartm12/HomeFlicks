import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      playButton: false,
      intervalFwd: 0,
      intervalBwd: 0
    }
    this.togglePlayPause = this.togglePlayPause.bind(this)
    this.video =  React.createRef();
    this.fwd = React.createRef();
    this.bwd = React.createRef();
    this.timer = React.createRef();
    this.timerWrapper = React.createRef();
    this.timerBar = React.createRef();
    this.toggleBwd = this.toggleBwd.bind(this);
    this.toggleFwd = this.toggleFwd.bind(this);
    this.windBackward = this.windBackward.bind(this);
    this.windForward = this.windForward.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  togglePlayPause() {
    if(this.video.current.paused) {
      this.setState({playButton: !this.state.playButton})
      this.video.current.play();
    } else {
      this.setState({playButton: !this.state.playButton})
      this.video.current.pause();
    }
  }

  toggleBwd() {
    this.setState({intervalFwd: clearInterval(this.state.intervalFwd)});
    this.fwd.current.classList.remove('active');
    
    if(this.bwd.current.classList.contains('active')) {
      this.bwd.current.classList.remove('active');
      this.setState({intervalBwd: clearInterval(this.state.intervalBwd)});
      this.video.play();
    } else {
      this.bwd.current.classList.add('active');
      this.video.current.pause();
      this.setState({intervalBwd: setInterval(this.windBackward, 200)});
    }
  }

  toggleFwd() {
    this.setState({intervalBwd: clearInterval(this.state.intervalBwd)});
    this.bwd.current.classList.remove('active');

  if(this.fwd.current.classList.contains('active')) {
    this.fwd.current.classList.remove('active');
    this.setState({intervalFwd: clearInterval(this.state.intervalFwd)});
    this.video.current.play();
  } else {
    this.fwd.current.classList.add('active');
    this.video.current.pause();
    this.setState({intervalFwd: setInterval(this.windForward, 200)});
  }
  }

   stopMedia() {
    this.video.current.pause();
    this.video.current.currentTime = 0;
    this.setState({playButton: false});
  }

   windBackward() {
    if(this.video.current.currentTime <= 3) {
      this.bwd.current.classList.remove('active');
      this.setState({intervalBwd: clearInterval(this.state.intervalBwd)});
      this.stopMedia();
    } else {
      this.video.current.currentTime -= 3;
    }
  }
  
   windForward() {
     debugger
    if(this.video.current.currentTime >= this.video.current.duration - 3) {
      this.fwd.current.classList.remove('active');
      this.setState({intervalFwd: clearInterval(this.state.intervalFwd)});
      this.stopMedia();
    } else {
      this.video.current.currentTime += 3;
    }
  }

  setTime() {
    let minutes = Math.floor(this.video.current.currentTime / 60);
    let seconds = Math.floor(this.video.current.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;

    if (minutes < 10) {
      minuteValue = '0' + minutes;
    } else {
      minuteValue = minutes;
    }

    if (seconds < 10) {
      secondValue = '0' + seconds;
    } else {
      secondValue = seconds;
    }

    let videoTime = minuteValue + ':' + secondValue;
    this.timer.current.textContent = videoTime;

    let barLength = this.timerWrapper.current.clientWidth * (this.video.current.currentTime/this.video.current.duration);
    this.timerBar.current.style.width = barLength + 'px';
  }

  render() {
    const playPause = this.state.playButton ? <FontAwesomeIcon icon={['fa', 'pause']} /> : <FontAwesomeIcon icon={['fa', 'play']} />;
    const fast = <FontAwesomeIcon icon={['fa', 'fast-forward']} />
    const back = <FontAwesomeIcon icon={['fa', 'backward']} />

    return(
        <div className="player">
          <video ref={this.video} onTimeUpdate={this.setTime}>
            <source src={this.props.movie.video_url} type="video/mp4"/>
          </video>
          <div className="controls">
            <button onClick={this.togglePlayPause} className="play" aria-label="play pause toggle">{playPause} </button>
            <div ref={this.timerWrapper} className="timer">
              <div ref={this.timerBar}></div>
              <span ref={this.timer} aria-label="timer">00:00</span>
            </div>
            <button className="rwd" ref={this.bwd} onClick={this.toggleBwd}  aria-label="rewind">{back}</button>
            <button className="fwd" ref={this.fwd} onClick={this.toggleFwd}  aria-label="fast forward">{fast}</button>
          </div>
        </div>
  )}
}

export default VideoIndexItem;

