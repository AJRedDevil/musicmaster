const BASE_URL = 'https://api.spotify.com/v1/';
const access_token = 'BQB-SfCw5cfPfgNvA2feVGSFWvp-JJZ0pePltDJ64PsmNy8E6mVblGHlU_0qOkeJJCvHrM6qP_7uRxA_t0N6r1pEK-sYW7jeBDuxYO3fKE_HesZf5SXSps4lTEgDvolXqIK1IHgaokneH4StS-iFYnQPxtVeGIg&refresh_token=AQAXeBH08gr0p6LlZkudh0M7EpVklGPU8bfGh7rYEh_2-xhJHGsQCXV5g8PGXjEDDpklA0VMiq66xinrNwrjAAbl0CxkBSXbOmusFKNl8lx84ozcjauHdygbzO2Pem8BYKw';

var my_options = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer ' + access_token
    }
};

export const searchArtist = (query) => {
    const SEARCH_URL = `${BASE_URL}search?`;
    const FETCH_URL = `${SEARCH_URL}q=${query}&type=artist&limit=1`;
    return fetch(FETCH_URL, my_options)
        .then(response => response.json());
};

export const searchAlbum = (id) => {
    const ALBUM_URL = `${BASE_URL}artists/`;
    const FETCH_URL = `${ALBUM_URL}${id}/top-tracks?country=US&`;
    return fetch(FETCH_URL, my_options)
        .then(res => res.json());
}