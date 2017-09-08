import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import './App.css';
import Profile from './Profile';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null
        };
        this.search = this.search.bind(this);
    }

    search() {
        // console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        console.log('FETCH_URL ' + FETCH_URL);
        const access_token = 'BQDivyxKYy9cBVfywjnSg5_aA--7h8OutDZhHIB4E4mQhyrue1hyWOhfkIiOPeRWvsMIm5Hx1Zs__xJJ9ENdSXqF97OH9sV_kqKJycfzm0voET6s0GPlxrFXmFBq1aPiB3LHimlfWq3mOswD5qNFZRN3t3URJzg&refresh_token=AQCm8AlLwjNhCqo742zbk4yeL42Z6ofBn0VhWu4k58vaciXTpHIfqLYnkB9imkjB68Ed2u1x1E3fbz4ZGtZdlUdDBlgLsj6cIgYTeU27M2uTTDjb_ROTa7XUkmu26AF2rvQ';
        fetch(FETCH_URL, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + access_token
            }
        })
        .then(response => response.json())
        .then(json => {
            const artist = json.artists.items[0];
            console.log('artist', artist);
            this.setState({artist});
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for an Artist"
                            value={this.state.query}
                            onChange={event => {this.setState({query: event.target.value})}}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={this.search}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Profile
                    artist={this.state.artist}
                />
                <div className="Profile">
                    <div>Artist Pictures</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        );
    }
}

export default App;