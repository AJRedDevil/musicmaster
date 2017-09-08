const BASE_URL = 'https://api.spotify.com/v1/';
const access_token = 'BQC1Rnc9velt9lN7Vs_HaUdPe79Oiw9npj_tm7p1nj_H-oa-Zmp5GRlazZofrDmAK73ZexJiFk1AGmza6l6_3VIJyzwa2bWV6pMhB60yZMtHhxpaN8Ta72DvvuQ-DgrBrKJzFlZ8ak9So9iaDMG0DaKrSI0v5iU';

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