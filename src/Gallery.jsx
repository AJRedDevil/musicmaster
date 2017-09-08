import React, { Component } from 'react'

export default class Galler extends Component {
    state = {
        playingUrl: '',
        audio: null,
        playing: false
    }
    
    playAudio = (previewUrl) => {
        let audio = new Audio(previewUrl);
        if (!this.state.playing){
            audio.play();
            this.setState({
                playing: true,
                playingUrl: previewUrl,
                audio
            })
        } else {
            if (this.state.playingUrl === previewUrl) {
                this.state.audio.pause();
                this.setState({
                    playing: false
                });
            } else {
                this.state.audio.pause();
                audio.play();
                this.setState({
                    playing: true,
                    playingUrl: previewUrl,
                    audio
                });
            }
        }

    }
    
    render() {
        const { tracks } = this.props;
        return (
            <div>
                {
                    tracks.map((track, k) => {
                        const trackImg = track.album.images[0].url;
                        return (
                            <div
                                key={k}
                                className="track"
                            >
                                <img
                                    src={trackImg}
                                    alt="track"
                                    className="track-img"
                                    onClick={() => this.playAudio(track.preview_url)}
                                />
                                <p className="track-text">
                                    {track.name}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
