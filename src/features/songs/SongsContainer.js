import React from 'react';
// import React, { useState } from 'react';
import SongList from './SongList';
// import spotify, { spotify_api } from '../../api/spotify';
import SongCard from './SongCard';

// import { SongSearch } from './SongSearch';

import SearchForm from '../spotify/SearchForm';
// import SearchResult from '../spotify/SearchResult';

const SongsContainer = (props) => {
  // const [query, setQuery] = useState('');
  // const [songs, setSongs] = useState([]);
  // const [image, setImage] = useState(null);

  // useEffect(
  //   () => (
  //     async () => {
  //       const search = '565ijKKAnZ5hsAemTZgEPK';
  //       const response = await fetch(
  //         `https://api.spotify.com/v1/playlists/${search}`
  //       );
  //       const data = await response.json();
  //       const [item] = data.data;
  //       setImage(item);
  //     },
  //     []
  //   )
  // );

  // const fetchSongs = (query) => {
  //   spotifyApi.search(query, ['track']);
  // };

  // const handleSearch = (searchTerm) => {
  //   fetchSongs(query);
  //   dispatchEvent();
  // };

  return (
    <div>
      <SongList />
      {/* <SongList songs={songs} /> */}
      {/* <SongSearch query={query} /> */}
      <SongCard />
      <SearchForm />
      {/* <SearchForm handleSearch={handleSearch} /> */}
      {/* <SearchResult result={result} /> */}
    </div>
  );
};

export default SongsContainer;

// export const GetSongs = () => {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [songs, setSongs] = useState([]);

//   const fetchSongs =
//     (() => {
//       fetch(`${spotify_api}/search`)
//         .then((res) => res.json())
//         .then(
//           (result) => {
//             setIsLoaded(true);
//             setSongs(result.songs);
//             debugger;
//           },
//           (error) => {
//             setIsLoaded(true);
//             setError(error);
//           }
//         );
//     },
//     []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {songs.map((song) => (
//           <li key={song.id}>
//             {song.name} {song.artist}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// };
