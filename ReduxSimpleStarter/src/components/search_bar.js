import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Create property searchTerm
    // The constructor is the ONLY place where this.state = blah blah blah is used
    this.state = { searchTerm: '' };
  }

  render() {
    return (
      // Always use setState when changing state
      <div>
        <input
          onChange={ event => this.setState({ searchTerm: event.target.value })}
          value={ this.state.searchTerm }
        />

      </div>
    );
  }
}


export default SearchBar;
