import React from 'react';

import VideoListItem from './video_list_item'

const VideoList = (props) => {
  // .map()
  // Takes array and iterates through it
  // Similar to .each() or a for loop

  // Edit 1: For each video in videos, create a <li>.
  //         The li is found in VideoListItem.
  //         Pass in the video props.
  // Edit 2: When creating a list, each item
  //         needs to have a unique ID.
  //         Etag comes from Youtube API and is a property
  //         on each video that is returned from the search.
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        key={ video.etag }
        video={ video }
        onVideoSelect={ props.onVideoSelect }
      />
    );
  });


  return (
    // In React, we replace class with className because class is used as a keyword
    // for a class-based component
    // We are using bootstrap classNames
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
}

export default VideoList;
