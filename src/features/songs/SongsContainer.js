import React, { useEffect, useState } from 'react';
import SongSearch from './SongSearch';
import SongList from './SongList';
import spotify, { spotify_api } from '../../api/spotify';

const SongsContainer = (props) => {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);
  const [image, setImage] = useState(null);

  // useEffect(() => {
  //     const term = 'dog';
  //     async function fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g&limit=1`) {
  //       const data = await response.json()
  //       const [item] = data.data;
  //       setImage(item)
  //     }
  //     fetch()
  //   }

  // }, []);

  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     let url = 'http://something/' + productId;
  //     let config = {};
  //     const response = await myFetch(url);
  //     console.log(response);
  //   }
  //   fetchMyAPI();
  // }, [productId]);

  useEffect(() => {
    async function fetchMyAPI() {
      let term = 'dog';
      let url = `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g&limit=1`;
      let config = {};
      const response = await fetch(url);
      console.log(response);
    }
    fetchMyAPI();
  }, []);

  // useEffect(
  //   () => (
  //     async () => {
  //       const search = '565ijKKAnZ5hsAemTZgEPK?j=';
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

  // const submitHandler = (query) => {
  //   fetchSongs(query);
  // };

  return (
    <React.Fragment>
      {/* <SongSearch submitHandler={submitHandler} /> */}
      <SongList songs={songs} />
      {image && <div>{image.id}</div>}
    </React.Fragment>
  );
  // return (
  //   <div>
  //     <SongSearch query={query} setQuery={setQuery} />
  //     <SongList />
  //   </div>
  // );
};

export default SongsContainer;

export const GetSongs = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [songs, setSongs] = useState([]);

  const fetchSongs =
    (() => {
      fetch(`${spotify_api}/search`)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setSongs(result.songs);
            debugger;
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    },
    []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.name} {song.artist}
          </li>
        ))}
      </ul>
    );
  }
};
