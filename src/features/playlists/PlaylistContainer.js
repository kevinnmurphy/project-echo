import React, { useEffect, useState } from 'react';
import PlaylistCard from './PlaylistCard';
import playlistObj from '../../db/playlists';
import PlaylistList from './PlaylistList';

const PlaylistContainer = (props) => {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {});
  const [search, setSearch] = useState('');

  // let displayedPlaylists = { playlists };
  // if ((search = '')) {
  //   displayedPlaylists = { playlists }.filter((playlist) =>
  //     playlist.name.toLowerCase().includes(search.toLowerCase())
  //   );
  // }

  return (
    <div>
      {/* <form>
        <label>Search</label>
        <input onChange={() => setSearch(search)}></input>
      </form> */}
      <PlaylistList />
    </div>
  );
};

export default PlaylistContainer;
