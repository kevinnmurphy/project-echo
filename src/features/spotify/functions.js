import SpotifyWebApi from '../spotify/spotify-web-api';

export const getParamValues = (url) => {
  return url
    .slice(1)
    .split('&')
    .reduce((prev, curr) => {
      const [title, value] = curr.split('=');
      prev[title] = value;
      return prev;
    }, {});
};

export let spotifyApi = new SpotifyWebApi();
export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem('params'));
    if (params) {
      spotifyApi.setAccessToken(params.access_token);
      console.log('Token Set');
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};

// export const setAuthHeader = () => {
//   try {
//     const params = JSON.parse(localStorage.getItem('params'));
//     if (params) {
//       axios.defaults.headers.common[
//         'Authorization'
//       ] = `Bearer ${params.access_token}`;
//     }
//   } catch (error) {
//     console.log('Error setting auth', error);
//   }
// };
