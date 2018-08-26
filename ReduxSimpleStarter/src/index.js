import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = '';

// Create new component.
// This component should produce some HTML.

// const is ES6 syntax
// var on steroids
// permanent value; never going to change.

// Returning HTML as JS is a concept of JSX.
// Returns what looks like HTML, but actually returns JS.
// JSX gets transpiled into vanilla JS.
// => in this case kind of means "function that returns blah".
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page.
// (In the DOM)
// <const /> "instantiates" the constant/variable as an object
// with the namne App
// You then insert it into the document that is in index.html
ReactDOM.render(<App />, document.querySelector('.container'));
