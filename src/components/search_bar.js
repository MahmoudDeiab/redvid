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

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default SearchBar;
