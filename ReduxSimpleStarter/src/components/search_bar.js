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
      <div className="search-bar">
        <input
          onChange={ event => this.onInputChange(event.target.value) }
          value={ this.state.searchTerm }
        />
      </div>
    );
  }

  onInputChange(searchTerm) {
    this.setState({ searchTerm });
    this.props.onSearchTermChange(searchTerm);
  }
}


export default SearchBar;
