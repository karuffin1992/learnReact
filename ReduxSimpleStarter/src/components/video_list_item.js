import React from 'react';

// { video }
// Using this syntax is the same as
// const video = props.video;

// Also, more bootstrap!!!
const VideoListItem = ({ video, onVideoSelect }) => {
  // Comes from response from YT
  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li
      onClick={ () => onVideoSelect(video) }
      className="list-group-item"
    >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={ imageURL } />
        </div>
        <div className="media-body">
          <div className="media-heading">{ video.snippet.title }</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
