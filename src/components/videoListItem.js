import React, { Component, PropTypes } from 'react';

class videoListItem extends Component {

  static propTypes = {
    video: PropTypes.any,
    onVideoSelect: PropTypes.func
  }
  render() {
    // const video = this.props.video;
    const imgUrl = this.props.video.snippet.thumbnails.default.url;
    const video = this.props.video;
    const videoSelect = this.props.onVideoSelect;
    return (
      <li className="list-group-item">
        <button className="input-button" value="click me!!" onClick={() => videoSelect(video)} >Click me!!</button>
        <div className="video-list-media">
          <div className="media-left">
            <img className="media-object" src={imgUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading" text-justify>
              {this.props.video.snippet.title}
            </div>
          </div>
        </div>
      </li>);
  }

}
export default videoListItem;
