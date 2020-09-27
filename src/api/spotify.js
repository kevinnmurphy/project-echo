export const spotify = {
  baseURL: 'https://accounts.spotify.com/authorize',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const clientID = '';
const redirectUri = 'http:localhost:3000';
const scopes = ['user-readcurrently-playing', 'user-read-playback-stats'];

export default spotify;
