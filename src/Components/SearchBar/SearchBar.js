import React from "react";
import Spotify, { accessToken } from "../../util/Spotify";
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term)
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" id="input" onChange={this.handleTermChange} />
        <button className="SearchButton" onClick={this.search} disabled={ ! accessToken}>SEARCH</button>
      </div>
    )
  }
}