import React from "react";
import { Track } from '../Track/Track'

export class TrackList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentlyPlaying: null
        };
        this.isPlaying = this.isPlaying.bind(this);
    }

    isPlaying(url) {
        return this.state.currentlyPlaying === url;
    }

    componentDidMount() {
        const audio = document.getElementById('audio');
        audio.addEventListener('play', (e) => {
            this.setState({ currentlyPlaying: e.target.src });
        });
        audio.addEventListener('ended', () => {
            this.setState({ currentlyPlaying: null });
        });
        audio.addEventListener('pause', (e) => {
            this.setState({ currentlyPlaying: null });
        });
    }

    render() {
        const trackList = this.props.tracks.map((track) => {
            return <Track key={track.id} track={track} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} onRemove={this.props.onRemove} previewUrl={track.preview_url} playing={this.isPlaying(track.previewUrl)}/>;
        });

        return (
            <>
                <audio id="audio"></audio>
                <div className="TrackList">
                    { trackList }
                </div>
            </>
        )
    }
}