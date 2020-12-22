export const spotify = {
  baseURL: 'https://accounts.spotify.com/authorize',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const authEndpoint = 'https://accounts.spotify.com/authorize';

// const clientID = 'f996e0e04a5142258907b008c42d47d8';
// const redirectUri = 'http:localhost:3000';
// const scopes = ['user-readcurrently-playing', 'user-read-playback-stats'];

export default spotify;

export const spotify_api = 'https://api.spotify.com/v1';

// ['Authorization'] = `Bearer ${params.access_token}`;
