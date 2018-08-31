import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDE7F1pM6RQkChXUWV67gQhJjJL8ajpOrs';

// const is ES6 syntax
// var on steroids
// permanent value; never going to change.

// Returning HTML as JS is a concept of JSX.
// Returns what looks like HTML, but actually returns JS.
// JSX gets transpiled into vanilla JS.
// => in this case kind of means "function that returns blah".

// App needs to be the parent app that fetches data from YT
// I.E. downward data stream

// VideoList needs to access the video list from the video state
// Therefore, we need to pass the state from App -> VideoList

// Create new component.
// This component should produce some HTML.
class App extends Component {
  // Constructors runs right away
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(searchTerm) {
    // Immediately kicks off the YTSearch
    // YouTube Search searches for term (IMPORTANT TO USE term; specific to YT)
    // Callback funciton returns state that sets state "videos" to property "videos"
    // Default selectedVideo to first video returned from search.
    YTSearch({ key: API_KEY, term: searchTerm },
    (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  // Passed data == passed props
  // videos={ this.state.videos }

  // Debounce sets the throttle of how often
  // a function should be ran.
  render() {
    const videoSearch = _.debounce((searchTerm) => { this.videoSearch(searchTerm) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          videos={ this.state.videos }
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
        />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page.
// (In the DOM)
// <const /> "instantiates" the constant/variable as an object
// with the namne App
// You then insert it into the document that is in index.html
ReactDOM.render(<App />, document.querySelector('.container'));
