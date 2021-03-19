import React from 'react';
import VideoIndexItem from './video_index_item'

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
    let video = this.props.movie ? <VideoIndexItem movie={this.props.movie}/> : "";
    return(
      <div className="firstvideo">
        {video}
      </div>
    )
  }
}

export default VideoIndex;