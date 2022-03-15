import React from "react";
import './Track.css'
import Spotify from "../../util/Spotify";

export class Track extends React.Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.renderAction = this.renderAction.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return '-';
    }

    return '+';
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <div className="title-and-button">
            <button className="play-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <h3>
              { this.props.track.name }
            </h3>
          </div>
          <p>
            { this.props.track.artist } | { this.props.track.album }
          </p>
        </div>
        <button className="Track-action" onClick={this.props.isRemoval ? this.removeTrack : this.addTrack}>
          { this.renderAction() }
        </button>
      </div>
    )
  }
}