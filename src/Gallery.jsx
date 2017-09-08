import React, { Component } from 'react'

export default class Galler extends Component {
    playAudio = (previewUrl) => {
        if (previewUrl) {
            let audio = new Audio(previewUrl);
            console.log(previewUrl);
            audio.play();
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
