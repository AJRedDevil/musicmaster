import React, { Component } from 'react'

export default class Galler extends Component {
    render() {
        console.log('gallery.props', this.props);
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
