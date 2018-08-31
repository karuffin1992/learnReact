import React from 'react';

const VideoDetail = ({ video }) => {
  // React likes to load everything as fast as possible.
  // The children components are rendering and loading information
  // before the parent component even has information.

  // We need to check if there is a video to pass.
  // If no video is found, pass a default div.
  if(!video) {
    return <div>Loading...</div>;
  }

  const videoID = video.id.videoId;
  // ES6 YAY
  // This URL has string interpolation.
  // Make sure instead of ''. you are using backticks (``).
  // We can inject the javascript variable straight into the string.
  const url = `https://www.youtube.com/embed/${ videoID }`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={ url }></iframe>
      </div>
      <div className="details">
        <div>{ video.snippet.title }</div>
        <div>{ video.snippet.description }</div>
      </div>
    </div>
  );
}

export default VideoDetail;
