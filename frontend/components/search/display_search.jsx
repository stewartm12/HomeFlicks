import React from "react";
import VideoItemContainer from '../videos/video_item_container'

class DisplaySearch extends React.Component {
  constructor(props) {
      super(props);
      
  }

  render() {
    let videos = this.props.videos.length > 0 ? this.props.videos.map((movie, index) => {
      return (
          <VideoItemContainer key={`searched-${index}`} movie={movie} />
      );
    }) :( <section className="show-gallery-index-wrapper no-results">
            <article className="no-results-content">
              <span>{`Your search for "${this.props.query}" did not have any matches.`}</span>
              <span>Suggestions:</span>
              <ul>
                <li>Try different keywords</li>
              </ul>
            </article>
          </section>);

    return (
      <div className="searched-row">
        {videos}
        <div className="bottom-links"></div>
      </div>
    );
  }
}

export default DisplaySearch