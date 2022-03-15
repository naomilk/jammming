import React from "react";
import { Track } from '../Track/Track'

export class TrackList extends React.Component {
    render() {
        const trackList = this.props.tracks.map((track) => {
            return <Track key={track.id} track={track} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} onRemove={this.props.onRemove}  />;
        });

        return (
            <div className="TrackList">
                { trackList }
            </div>
        )
    }
}