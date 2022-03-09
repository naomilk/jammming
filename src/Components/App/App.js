import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: 'bob',
      playlistTracks: [{
        id: 10,
        name: 'bob',
        artist: 'the land of nod',
        album: 'all the good things'
      },
      {
        id: 20,
        name: 'love nine',
        artist: 'XDL',
        album: 'milk can be friend'
      }],
      searchResults: [{
        id: 1,
        name: 'bashpolaza',
        artist: 'bash',
        album: 'bash land'
      },
      {
        id: 2,
        name: 'lulupolaza',
        artist: 'lulu',
        album: 'lulu land',
      },
      {
        id: 3,
        name: 'nanapolaza',
        artist: 'nana',
        album: 'nanabanana land',
      }]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    const isInPlaylist = this.state.playlistTracks.some((playlistTrack) => {
      return playlistTrack.id === track.id;
    });
    if(!isInPlaylist) {
      this.setState({
        playlistTracks: [...this.state.playlistTracks, track]
      });
    }
  }

  removeTrack(track) {
    const trackId = track.id;
    const newPlaylistTracks = this.state.playlistTracks.filter((currTrack) => {return currTrack.id !== trackId});
    this.setState({playlistTracks: newPlaylistTracks});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    )
  }
}