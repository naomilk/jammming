import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { SearchResults: [{
      name: 'bashpolaza',
      artist: 'bash',
      album: 'bash land',
      id: 1
    }, 
    {
      name: 'lulupolaza',
      artist: 'lulu',
      album: 'lulu land',
      id: 2
    },
    {
      name: 'nanapolaza',
      artist: 'nana',
      album: 'nanabanana land',
      id: 3
    }]}
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
    )
  }
}