 import React, { Component, PropTypes } from 'react';
 import VideoListItem from './videoListItem';
 class videoList extends Component {

   static propTypes = {
     videos: PropTypes.any,
     onVideoSelect: PropTypes.any
   }

   render() {
     const BufferList = (this.props.videos).map((video) => <VideoListItem onVideoSelect={this.props.onVideoSelect} video={video} key={video.etag} />);
     return (
       <div>
         <ul className="col-md-4 list-group">
           {BufferList}
         </ul>
       </div>
     );
   }
}
 export default videoList;
