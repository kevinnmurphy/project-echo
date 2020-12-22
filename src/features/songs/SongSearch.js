import React from 'react';

// import SpotifyWebApi from '../spotify/spotify-web-api';
import { spotifyApi, setAuthHeader } from '../spotify/functions';

// export const getTrackById = () => {
//   let track = '';
//   spotifyApi.getTrack('7ouMYWpwJ422jRcDASZB7P').then(
//     function (data) {
//       track = data;
//       console.log('Track Info', data);
//     },
//     function (err) {
//       console.error(err);
//     }
//   );
//   return <section>{track}</section>;
// };

export const SongSearch = (query = 'mood') => {
  setAuthHeader();
  let track = '';
  spotifyApi.search(`${query}`, ['track']).then(
    function (data) {
      track = data;
      console.log('Track Info', data);
    },
    function (err) {
      console.error(err);
    }
  );
  return <section>{track}</section>;
};

// Knights of Cydonia
// 7ouMYWpwJ422jRcDASZB7P
// Mood
// 3tjFYV6RSFtuktYl3ZtYcq
