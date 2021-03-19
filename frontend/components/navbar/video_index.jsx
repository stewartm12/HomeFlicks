import React from 'react';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
    debugger
  }

  componentDidMount() {
    debugger
    this.props.fetchMovie();
  }

  render () {
    let video = this.props.movie ? <video src={this.props.movie.video_url} controls></video> : "";
    return(
      <div className="firstvideo">
        {video}
      </div>
    )
  }
}

export default VideoIndex;