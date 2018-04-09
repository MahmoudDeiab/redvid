import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: 'Enter search term'
    }

    /*
    If onInputChange was a normal function (not an arrow function)
    We'd have to do:
    this.onInputChange = this.onInputChange.bind(this);
    ES6+ Way of doing it, is using the :: binding operator
    this.onInputChange = ::this.onInputChange
    */
  }

  onInputChange = (term) => {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
